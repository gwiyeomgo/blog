```
title: 비즈니스 구축 경험 - 신청,결과보고서를 모두 제출 했는지 확인하는 코드
startDate: 2022-05-03
```
---

# 배경

- applications table

|id|contents|상태|
|------|---|---|
|1|테스트1|Saved|
|2|테스트2|Registered|
|3|테스트3|Approved|

- reports table

|id|contents|상태|
|------|---|---|
|1|테스트1|Saved|
|2|테스트2|Registered|
|3|테스트3|Rejected|

모든 상태 값

|상태|한글|
|---|---|
|Saved|임시저장|
|Registered|신청|
|Reworked|재작업|
|Approved|승인|
|Rejected|반려|
|Rejected|반려|

기관에는 여러명의 소속 직웝이 있다.
기관은 물품을 선택할 수 있다.

신청의 상태가 Registered,reworked,approved 이고 
보고서의 상태가 Registered,Approved 이면
해당 기관의 담당자는 물품을 신청할 수 있다.

|POST|PUT|
|---|---|
|입력값이 승인된 기관인지 확인||
|입력값이 승인된 물품인지 확인||
|입력값이 사업분야가 물품의 사업분야와 일치하는지 확인|신청이 존재하는지 확인|
|기관,물품으로 신청된 내용 있는지 확인,없다|신청된 데이터의 기관과 신청서의 기관이 일치하는지 확인|
|입력값이 등록을 원하면,신청 가능한지 확인|입력값이 등록을 원하면,신청 가능한지 확인|



```

func (s *ApplicationCUD) validateForCreation(c echo.Context) error {
	context.Log(c).Traceln("")

	org := internal.Org{Id: s.OrgId, Status: enum.Approved.String()}
	if b, err := org.GetOne(c); err != nil {
		return err
	} else if !b {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))
	}

	goods := internal.Goods{Id: s.GoodsId, Status: enum.Registered.String()}
	if b, err := goods.GetOne(c); err != nil {
		return err
	} else if !b {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(물품개설:%d)", s.GoodsId))
	} else if goods.Expired || goods.Closed {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNotAvailable+"(물품개설:%d)", s.GoodsId))
	}

	if goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))
	} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(지역:%d)", org.BusinessRegion))
	}

	applications := internal.Application{OrgId: s.OrgId, GoodsId: s.GoodsId}
	if results, err := applications.GetList(c); err != nil {
		return err
	} else if len(*results) > 0 {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist + "(신청)"))
	}

	if s.Status == enum.Registered.String() {
		available, err := ApplicationRepository{}.IsApplicationAvailable(c, s.OrgId, 0)
		if err != nil {
			return err
		} else if !available {
			return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist+"(단체:%d)", s.OrgId))
		}
	}

	return nil
}

func (s *ApplicationCUD) validateForUpdating(c echo.Context) error {
	context.Log(c).Traceln("")

	org := internal.Org{Id: s.OrgId, Status: enum.Approved.String()}
	if b, err := org.GetOne(c); err != nil {
		return err
	} else if !b {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))
	}

	goods := internal.Goods{Id: s.GoodsId, Status: enum.Registered.String()}
	if b, err := goods.GetOne(c); err != nil {
		return err
	} else if !b {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(물품개설:%d)", s.GoodsId))
	} else if goods.Expired || goods.Closed {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNotAvailable+"(물품개설:%d)", s.GoodsId))
	}

	if goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))
	} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(지역:%d)", org.BusinessRegion))
	}

	application := internal.Application{Id: s.Id}
	if b, err := application.GetOne(c); err != nil {
		return err
	} else if !b {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))
	}

	if application.OrgId != s.OrgId {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(단체:%d)", s.OrgId))
	} else if application.GoodsId != s.GoodsId {
		return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(물품개설:%d)", s.GoodsId))
	}

	if s.Status == enum.Registered.String() {
		available, err := ApplicationRepository{}.IsApplicationAvailable(c, s.OrgId, s.Id)
		if err != nil {
			return err
		} else if !available {
			return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist+"(단체:%d)", s.OrgId))
		}
	}

	return nil
}
```


```
func (ApplicationRepository) IsApplicationAvailable(c echo.Context, orgID int64, id int64) (bool, error) {
	context.Log(c).Traceln("")

	applicationStatus := []string{enum.Registered.String(), enum.Reworked.String(), enum.Approved.String()}
	builder := context.DB(c).Table("applications").Where("del is null or del = 0").In("status", applicationStatus)
	if orgID != 0 {
		builder = builder.And("org_id = ?", orgID)
	}
	if id != 0 {
		builder = builder.And("id !=?", id)
	}

	var applications []map[string]string
	if err := builder.Find(&applications); err != nil {
		context.Log(c).Errorln(err.Error())
		return false, errors.ApiInternalServerError(err.Error())
	}

	reportStatus := []string{enum.Registered.String() enum.Reworked.String(), enum.Approved.String()}
	report := context.DB(c).Table("reports").Where("del is null or del = 0").And("org_id = ?", orgID).In("status", reportStatus)
	if id != 0 {
		report.And("application_id !=?", id)
	}
	var reports []map[string]string
	if err := report.Find(&reports); err != nil {
		context.Log(c).Errorln(err.Error())
		return false, errors.ApiInternalServerError(err.Error())
	}

	if len(applications) == len(reports) {
		return true, nil
	}

	return false, nil
}
```
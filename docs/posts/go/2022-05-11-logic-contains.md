```
title:  golang 으로 배열에 데이터가 포함하는지 확인하는 함수 만든 경험
startDate: 2022-05-11
```
---

## 베경
신청하는 API 를 만들었다.
기관이 물품을 신청할 때 
신청 가능한지 확인하는 코드가 존재한다.
이때 물품의 사업 분야와 기관의 사업 분야가 존재하며
물품의 사업분야에 기관의 사업분야가 포함되어야 신청 할 수 있다.

# 작업 내용
물품의 사업 분야가 복수 일 때 기관의 사업 분야가 포함하는지 확인

# 코드
```
func Contains(items []string, key string) bool {
	for _, item := range items {
		if item == key {
			return true
		}
	}
	return false
}

if goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {
    return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))
} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {
    check := false
    goodsBusinessFields := strings.Split(goods.BusinessField, ",")
    orgBusinessFields := strings.Split(org.BusinessField, ",")
    for _, orgBusinessField := range orgBusinessFields {
        if common.Contains(goodsBusinessFields, orgBusinessField) {
            check = true
            break
        }
    }
    if !check {
        return errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(기관의 사업분야:%d)", org.BusinessField))
    }
}
```

우선 이렇게 했는데...
포함관계일때 어떻게 코드를 만들어야 할까?

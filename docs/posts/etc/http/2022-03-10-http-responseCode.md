```
title: HTTP 상태 코드
startDate: 2022-03-10
```
---

# 배경

# 상태 코드별 정리
| 번호 | 상태 | 상황 |
| --- | --- | --- |
| 400 | BadRequest | <br>물품 나눔 서비스에서 나눔사업팀 담당자가 제출된 결과 보고서 내역을 조회하기 위해 고유 번호를 입력하고 조회합니다.<br>이때<br>클라이언트에서 잘못된 고유 번호를 서버로 전달합니다.<br>서버에서는 고유번호를 유효성 검사 하고 잘못된 요청 에러를 반환합니다.  즉 값이 잘못되면 400 으로 상태값을 정의|
| 401 | Unauthorized | 사용자 로그인 실패시에는 401을 반환합니다. |
| 403 | Forbidden | 사용자가 권한없는 메뉴에 접근시(API 요청시) 403을 반환합니다. |
| 404 | No Result | 물품 기부 서비스에서 기부 영수증 신청 화면에 접근했을 때 기본 공제 영수증 정보가 없다면 400번으로 에러를 보냅니다. 하지만 데이터가 없을 수 있기 때문에 404 를 반환해야 합니다.<br>자신의 정보가 아닌 정보를 조회하려 할 때(자신이 기부하지 않은 기부건 정보 조회를 요청할 때)는 403이 아닌 404를 반환합니다. |
| 409 | Conflict |  |
| 410 | Gone |  |

| 번호 | 상태 | 상황 |
| --- | --- | --- |
| 200 | OK | 요청 정상 |  
| 201 | Created | 요청 받았으며, 생성 작업을 성공 |  
| 202 | Accepted | 요청을 받아들여졌으나, 아직 동작을 수행하지 않은 상태로 요청 적절 |  
| 203 | NonAuthoritativeInfo | 요청 성공했지만, 검증이 되지 않은 상태 |  
| 204 | NoContent | 요청 성공했지만, 제공할 내용이 없음 |  


# 에러 알림 시스템을 도입하니..
404 오류가 발생했을 때 데이터가 없는 상황을 오류로 봐야하는지 고민이 필요한거 같다

200번대 메세지를 보내서 204? 요청은 성공했지만 내용 없음....???으로 바꿔야 하나?

# 출처
https://kanzler.tistory.com/44













 
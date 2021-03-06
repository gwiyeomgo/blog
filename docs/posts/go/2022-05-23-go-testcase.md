```
title:  golang 으로 테스트케이스 짜기
startDate: 2022-05-23
```
---

# TDD(Test Driven Development)?
‘테스트 주도 개발’을 말한다.
작은 단위로 테스트 케이스를 작성하고 
이를 통과하는 코드를 추가하는 단계를 반복하여 구현하는 것

[참고](https://hanamon.kr/tdd%EB%9E%80-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A3%BC%EB%8F%84-%EA%B0%9C%EB%B0%9C/)

# 배경
우리는  애자일 기방법론 중 XP 의 Test First 개념을 적용하여
 Test Case 를 작성합니다.
이번 글에서는 golang 에서 test case 작성하는 내용을 쓰려고 한다.

# golang 코드로 testcase 작성하기


## 1. 테스트 케이스 환경 만들기
* [db 설정-YML 데이터 추가](../mysql/2021-06-19-sql-sqllight.md)  

## 2. 함수 단위 테스트 케이스 작성

> 1.controller_test.go 파일 만들기
>
아래 코드는 `controller.go` 파일의 내용이다.
```
func (controller Controller) Init(g *echo.Group) {
	g.POST("", controller.Create, middlewares.CheckPermission([]string{"*"}))
	g.GET("/:id", controller.Get, middlewares.CheckPermission([]string{"*"}))
}

func (Controller) Create(ctx echo.Context) error {
    ...
}
```
1. Create 함수에 커서를 두고 => goland 의 단축키 `Ctrl+Shift+T` 동작하면 
`controller_test.go` 파일에 `TestController_Create` 테스트 케이스를 작성할 수 있는 파일이 생성된다.

```
func TestController_Create(t *testing.T) {
    //go의 경우 test case 를 go 형식의 파일 이름에 쓴다면 작성할 수 있다.
}
```

> 2.controller_test.go 파일에 코드 작성
* [given when then](https://en.wikipedia.org/wiki/Given-When-Then)
`: Test Code  표현하는 방식`
 [- 개념 설명 링크](https://kchanguk.tistory.com/40) 
 
 * given when then 에 맞춰 코드를 작성한다.
```
t.Run("CreateWithClassificationByVisit_기부등록", func(t *testing.T) {
        //given
        requestBody := `{ "name":"수진","meno":"tset"}`
        req := httptest.NewRequest(echo.POST,`/`,strings.NewReader(requestBody))
        req.Header.Add(echo.HeaderContentType, echo.MIMEApplicationJSON)
        
        userClaim := auth.UserClaim{
        Id:    3,
        Roles: "manager",
        }
        
        // when
        rec := NewRequest(req).
        WithUser(&userClaim).
        Handle(Controller{}.Create)
        
        // then
        assert.Equal(t, http.StatusOK, rec.Code)
        
        result := map[string]interface{}{}
        json.Unmarshal(rec.Body.Bytes(), &result)
        assert.Equal(t, float64(2), result["Id"])
	})
```
# golang 테스트 케이스를 작성하면서 주의할 부분
* 하나의 테스트 실행시 db 설정및 초기화 된다.
`DatabaseFixture{}.setUpDefault(xormDb)`
    > tip) 여러개 하고 싶다면 db 셋팅 후 등록=> 조회까지 한번에 테스트 가능
                                                                        >
```
DatabaseFixture{}.setUpDefault(xormDb)
t.Run("Test_등록_테스트",func(t *testing.T) {//given then when 작성})
t.Run("Test_등록_조회_테스트",func(t *testing.T) {//given then when 작성})
```
* 	t.Skip() 을 통해 전체 테스트 케이스 돌릴때 특정 test case 를 ignored 할 수 있다.
나의 경우는 알림톡이 실제 번호로 전송되는 문제가 있어서 
전체 테스트 케이스 실행 시 알림톡이 전송되어 문제가 있었다.
알림톡이 제대로 왔는지 테스트 할때는 `t.Skip()` 을 주석처리하고 따로 각 테스트 케이스를 돌려서 확인






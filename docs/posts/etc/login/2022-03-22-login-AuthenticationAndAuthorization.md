```
title: 로그인을 공부해보자 - authorization and authentication
startDate: 2022-03-22
```
---

## [authorization](https://en.wikipedia.org/wiki/Authorization) 
* 인가하다(대상이 옳음을 소상하게 밝혀 인정하다.)
* 권한 여부 확인

```
Authorization is the function of
 specifying access rights/privileges to resources,
  which is related to general information security and computer security,
   and to access control in particular.
    ( 접근 권한/특권, 특히 접근 제어를 지정하는 기능)
```

## [authentication](https://en.wikipedia.org/wiki/Authentication) 
* 인증
* 사용자의 신원을 확인하는 행동
* ex) 회원가입,로그인
```
Authentication is 
 is the act of proving an assertion, such as the identity (신원)
  of a computer system user.
   (컴퓨터 시스템 사용자의 신원과 같은 주장을 증명하는 행위)
```

1. 유저가 로그인 시도
2. 서버상에 일치하는 유저 정보를 찾는다
3. 찾았다면 인증(authentication)확인의 표시로 세션/토큰을 빌급/전달 
4. 웹 브라우저 세션/토큰을 관리하고
5. 새롭게 서버로 요청을 보낼 때 인가(authorization)하기 위해 세션/토큰을 함께 보낸다.
[출처](https://fierycoding.tistory.com/69)
   
## 세션/토큰 비교

<세션>
* 서버측에서 저장/관리
* 유효기간,HttpOnly,Secure 옵션 주어 쿠키 저장
* 세션?
  서버가 사용자의 정부를 저장해야헸고 이를 세션이라고 불렀다
  대부분 세션을 메모리에 저장했고 로그인중 사용자가 많아지면서 db나 서버에 무리를 주었다.
  https://mangkyu.tistory.com/55

<토큰>
* 웹 브라우저에 저장
* 세션보다 공격 노출 더 크다
* 되도록 민감한 정보를 담지 않도록 한다
* 만료 기간 설정 가능 
* 토큰 주기가 짧을 때 refresh token 을 인증과정에 추가적으로 발급
  [Refresh token 설명 영상](https://opentutorials.org/course/3405/22010)

# 실제로 적용한 방식

지금 사용하는 시스템은 JWT 기반의 인증을 사용합니다.
현재는 클라이언트에서 아이디,패스워드를 보내면 서버가 응답값으로 jwt token(aceess token ,refresh token) 을 보냅니다.
클라이언트는 로컬스트로지에 jwt token 을 저장하고 있으면
jwt 토큰은 주기 짧아 refresh token 도 같이 사용하고 있다.
https://blog.outsider.ne.kr/1160

* ### [계정 service],[resource service],[client] 를 이용한 로그인
[실제 코드](2022-02-15-login-jwtTokenCreate.md)

* ### [client] 로컬 을 실행하고 [service] 개발계 의 DB와 API 사용하기
    일반적이진 않지만 화면 개발을 해야 하는데 서버 개발이 늦어져서 개발계에 서버와 연동해서 작업을 했었다.
    (이때는 서버가 보내주는 json 값이 일치 했기 때문에 가능했다.)

> 1. [client]에 로그인 하면 아이디,패스워드로 jwt 토큰을 [계정 service] 에 요청합니다.
> 2. [계정 service]에서 jwt token 을 만들 때 [개발계의 JWT]랑 똑같도록 변경하는 작업 진행
> 3. [계정 service] 는 [개발계의 JWT]을 화면에 전달합니다.
> 4. 로그인한 사용자는 [개발계 서버의 API]를 조회할때 [개발계의 JWT]을 사용




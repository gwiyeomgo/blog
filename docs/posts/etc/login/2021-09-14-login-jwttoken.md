```
title: jwt token
startDate: 2021-09-14
```
---

jwt
인증을 위한 토큰
토큰 사용자인증을 위한 정보를 서명한 것

https://opentutorials.org/course/3405

* 인코딩/디코딩?

jwt.io 사이트에서도 jwt 토큰을 디코딩한 결과를 알수 잇다.
이처럼 지금 사이트는 서베에서 디코딩해서 토큰안에 정보를 얻음

cookie의 사용을 제거
토큰 등의 정보를 cookie로 저장하면,
domain 기반으로 불필요한 cookie가 전달되어 예상치 못한 오류를 야기할 수 있다.
이런 경우 cookie 대신 HTML5 spec에 있는 Web Storage(Session/Local storage)를 사용하는 것이 더 일반적4

---

이때 원인은 jwt 토큰
* [참고](https://naon.me/posts/til63)

admin 화면(프론트)에서 토큰 생성시간은 로컬타임
service 는 gmt 글로벌 타임 (GMT)

service 시간을 로컬타임으로 변경
* [참고1](https://webisfree.com/2022-01-10/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-%EB%B0%A9%EB%AC%B8%EC%9E%90%EC%9D%98-%EB%A1%9C%EC%BB%AC-%ED%83%80%EC%9E%84%EC%A1%B4%EA%B3%BC-utc-%EC%8B%9C%EA%B0%84%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%ED%95%A0%EA%B9%8C)

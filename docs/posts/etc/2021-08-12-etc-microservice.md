```
title: 마이크로서비스
startDate: 2021-08-12
```
---

# 배경

사용자에게 택배를 통해 기부를 받는 플렛폼을 개발했다
동시에
매장에서 기부를 받고 기록하는 시스템을 개발했다

둘다 같은 기부 데이터 이지만 다른 테이블에서 데이터를 관리한다
회원정보 테이블은 둘이 같이 쓴다
필요한 정보를 찾기 위해 두 스키마에서 각각 조회해야 한다
택배 시스템에는 기존 택배사외에 다른 택배사와 연동 작업이 진행중이다.
연동을 위해 기존 플렛폼코드를 변경했고
변경 완료이후 팀원들이 시스템에 문제가 없는지 하나씩 확인하고 개발해야 하는 상황이 발생했다.

db 1개를 갖고 시스템을 쓰면서 일부 수정하기 어렵다


# [마이크로서비스](https://www.redhat.com/ko/topics/microservices/what-are-microservices)

관계가 있는 것끼리 모아놓자

# 모놀리식(monolithic) 서비스
microservices-monolithic

# 참고
https://velog.io/@sangmin7648/Monolithic-vs-Microservice-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98
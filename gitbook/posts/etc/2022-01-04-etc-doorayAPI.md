```
title: dooray api 사용하기로 장애발생시 알림을 주는 기능 개발 경험 
startDate: 2022-01-04
```
---

# dooray api 사용하기

1. dooray api를 호출하기 위한 토큰 생성
   dooray 설정> api 서비스 > 인증 토큰 생성
   
2. [서비스 api](https://helpdesk.dooray.com/share/pages/9wWo-xwiR66BO5LGshgVTg/2939987647631384419) 에서
   프로젝트에 새업무를 등록하는 api 찾기

# postman 에서 Authorization 설정
type : API key
=> key :Authorization
=> Value : `dooray-api {두레이에서 받은 key}`

# postman 에서 Header 설정
Content-Type : application/json 으로 설정

# environment
https://api.dooray.com/

# 사용했었던 API
1.프로젝트에 업무를 생성
```
Project > Projects > Posts
POST /project/v1/projects/{project-id}/posts
```

2.프로젝트 속한 멤버 조회
```
GET /project/v1/projects/{project-id}/member-groups
```

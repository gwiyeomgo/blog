```
title: 테스트 케이스를 위한 환경 구성 (sqlight) 
startDate: 2021-06-19
```
---

필자는 최근 MySQL,SQLLight 의 DB환경에서 개발하고 있습니다.
그런데 MySQL에 일부 내장 함수가 sqllight에서 지원하지 않고 있습니다.
</br>
# SQLLight
### 0.별도 관리가 필요 없는 메모리 데이터베이스 : sqlite
SQLite는 MySQL나 PostgreSQL와 같은 데이터베이스 관리 시스템이지만, 서버가 아니라 응용 프로그램에 넣어 사용하는 비교적 가벼운 데이터베이스




Windows 환경에서 go-sqlite3 를 사용하기 위해 설치한다. 만일 minGW이 설치되어 있지 않다면 다음과 같은 에러가 발생하며 테스트 코드가 실행되지 않는다.



1. YML 파일 경로
메모리 DB에 입력할 데이터를 YML파일을 통해 입력합니다.


testdata 디렉토리를 생성하고 yml 파일을 생성하세요
go에서는 testdata 디렉토리와 _test 로 끝나는 파일은 빌드에서 제외됩니다.
2.YML 데이터 입력 방법
yml을 작성할 때 작성법을 따르지 않는다면 테스트를 제대로 진행 할 수 없습니다.


yml은 DB의 TABLE환경과 똑같이 설정한다.(필수값만 입력하기)
JSON형태의 값은 한줄로 작성한다.
```
business_areas: { "child": true, "youth": true, "senior": true, "disabled": true, "women": true, "family": true, "community": true, "internationalDevelopment": true, "environment": true, "notApplicable": true}
```
암호화된 값은 암호화된 키를 작성한다.



# YML

ex)UserController에서 사용하는 YML
userTable
```
- user_no: 1
  id: "super@w.org"
  company_id: 1
  password: $2a$0d1S4JStXW
  name: "수퍼담당자"
  status: "Approval"
  mobile: uvbANnupYDSrkys=
  infomation_use_agree: 1
  infomation_receiving_agree: 1
  created_at: RAW=datetime('now')
  updated_by: "1"
  updated_at: RAW=datetime('now')
```

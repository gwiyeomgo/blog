```
title: 배포
startDate: 2022-04-11
```
---

## 배경
개발자가 사용할 dev 서버에 배포한다.

사용자 페이지 
어드민 페이지 

## 작업 목표
1. 사용자 페이지
(프론트_프로젝트) 레포지토리에 dev 브랜치 따기
jenkins와 dev 브랜치 연결
jenkins에서 새로운 job 생성하기
job 이름 - (프론트_프로젝트)-dev
jenkins 셋팅하기
   (프론트_프로젝트)-test job 설정 참고
s3 버킷 만들기
cloudFront과 s3 버킷 연결하기
Route53과 cloudFront 연결하기
jenkins 빌드 후 조치 설정
cloudFront ID 연결하기
배포될 코드 설정 수정하기 
front 배포- (프론트_프로젝트) 코드 수정하기
젠킨스 빌드 버튼 누르기
success가 뜨는지 확인
dev url로 들어가서 제대로 페이지가 나오는지 확인
확인 필요
이미 s3에 사용하려 했던 이름의 버킷이 존재한다. 
-> 비어 있으므로 그대로 사용해도 되는지 확인해볼 것
image.png

위에 s3 버킷은 cloudFront 설정도 적용이 되어 있다.
image.png

Route53에 이미 사용하려 했던 레코드(url)이 존재한다.
image.png
image.png
=> S3는 객체가 비어 있으므로 그대로 사용하는 것으로 결정됨, CloudFront와 Route53은 기존 것을 지우고 새로 만들어서 연결함


2. 어드민 페이지
   (어드민_프로젝트) 레포지토리에 dev 브랜치 따기
jenkins와 dev 브랜치 연결
jenkins에서 새로운 job 생성하기
job 이름 - (어드민_프로젝트)-dev
jenkins 셋팅하기
   (어드민_프로젝트)-test job 설정 참고
s3 버킷 만들기
cloudFront과 s3 버킷 연결하기
Route53과 cloudFront 연결하기
배포될 코드 config, package.json 파일 수정하기
jenkins 빌드 후 조치 설정
cloudFront ID 연결하기
s3에 소스 코드 붓기
url에 접속해서 확인하기


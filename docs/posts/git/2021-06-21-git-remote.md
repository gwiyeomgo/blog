```
title: git remote
startDate: 2021-06-21
```
---

# 평소 사용 
1.project clone
2. remote origin 설정
3. project fork
4. remote add (이름) (fork url)
5. origin 의 master branch 를 시작으로 새 브런치 생성
6. 작업 후 새 branch 를 git push (이름) (새 브런치)
7. fork 된 프로젝트에서 => origin master 로 merge request

## Git 저장소 만들기
#### 1.아직 버전관리를 하지 않는 로컬 디렉토리 하나를 선택해서 Git 저장소를 적용하는 방법

    1. `git init` :이 명령은 .git 이라는 하위 디렉토리를 만든다.
    2. Git이 파일을 관리하게 하려면 저장소에 파일을 추가하고 커밋해야 한다.
    `git add` 명령으로 파일을 추가하고 `git commit ` 명령으로 커밋 => 파일 버전 관리를 시작

2.다른 어딘가에서 Git 저장소를 Clone 하는 방법

1. `git clone <url>` 을 실행하면 프로젝트 히스토리를 전부 받음


## 리모트 저장소

리모트 저장소는 인터넷이나 네트워크 어딘가에 있는저장소를 말한다
```
title: mysql 트랜잭션 도구
startDate: 2021-12-24
```
---
# 배경

지금 회사에서는 mysql 을 사용한다.
개발하는 과정에서 다같이 사용하고 있는 데이터를 수정해야 할 때
잘못된 데이터로 변경한다면 이전 데이터로 되돌릴 수 없다.

그래서 트랜잭션 도구를 사용해서 이전으로 되돌릴 수 있다.


# 트랜잭션 도구
```
START TRANSACTION;

-- COMMIT, ROLLBACK이 나올 때까지 실행되는 모든 SQL 추적

COMMIT;

-- 모든 코드를 실행(문제가 없을 경우에)

ROLLBACK;

-- START TRANSACTION 실행 전 상태로 되돌림(문제 생기면)
```

# 어떻게 사용하지?

먼저 데이터를 변경하는 이슈가 생긴다면
sql 를 만들고 바로 실행시키는 것이 아닌

`START TRANSACTION` 을 입력한다.

그후 작성한 sql 을 실행시키고
제대로 데이터를 변경했는지 검색한다 (select)

확인했을때 제대로 변경되었다면 `COMMIT` 을 하고 작업을 마치고

만약 다시 이전으로 되돌려야 한다면 `START TRANSACTION` 을 실행한다.



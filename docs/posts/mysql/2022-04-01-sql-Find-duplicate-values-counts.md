```
title: mysql 중복값은 어떻게 찾을까?
startDate: 2022-04-01
```
---

# SQL 중복값 수 찾기(find duplicate values in mysql)

```
SELECT id, count(id) from org.reports where status = "Approved" group by id having count(id)>1;

SELECT * from reports where id in (1,2,3);
```
https://stackoverflow.com/questions/16697215/count-number-of-unique-values
https://kimsyoung.tistory.com/entry/SQL%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5%EA%B0%92-%EC%B0%BE%EB%8A%94-%EB%B0%A9%EB%B2%95

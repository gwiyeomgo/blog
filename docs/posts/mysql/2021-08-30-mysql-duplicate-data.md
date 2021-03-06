```
title: 중복 데이터 처리 경험
startDate: 2021-08-30
```
---

1 NATIVE 이름  1234 UserApplicationCompleted 17 1 2021-08-18 14:45 1 2021-08-18 14:46
2 NATIVE 이름  1234 UserApplicationCompleted 16 1 2021-08-18 14:46 1 2021-08-18 14:46
3 NATIVE 이름  1234 UserApplicationCompleted 14 1 2021-08-18 14:49 1 2021-08-19 13:30
4 NATIVE 이름  1234 UserApplicationCompleted 14 1 2021-08-18 14:49 1 2021-08-19 13:30
5 NATIVE 이름  1234 UserApplicationCompleted 22 1 2021-08-24 15:59 1 2021-08-24 15:59
6 NATIVE 이름  1234 UserApplicationCompleted 22 1 2021-08-24 15:59 1 2021-08-24 15:59

``` sql
SELECT COUNT(c.id) as 중복된 데이터가 존재하는 기부건 수
FROM (SELECT id,count(id) FROM store_donation.donation_receipts GROUP BY donation_id HAVING count(*) > 1) as c;
```

|COUNT(c.id)|
|2 |

### 중복된 데이터가 2개 이상인 데이터

``` sql
select *
from store_donation.donation_receipts
where donation_id in (
SELECT donation_id FROM store_donation.donation_receipts GROUP BY donation_id HAVING count(*) > 1
);
```

### temp 테이블에 중복된 데이터가 2개 이상인 데이터 복사

``` sql
create table store_donation.temp as select *
from store_donation.donation_receipts a
where donation_id in (SELECT donation_id frOM store_donation.donation_receipts GROUP BY donation_id HAVING count(*) > 1 )
order by donation_id
```

3 NATIVE 이름  1234 UserApplicationCompleted 14 1 2021-08-18 14:49:43 1 2021-08-19 13:30:44
4 NATIVE 이름  1234 UserApplicationCompleted 14 1 2021-08-18 14:49:43 1 2021-08-19 13:30:44
5 NATIVE 이름  1234 UserApplicationCompleted 22 1 2021-08-24 15:59:22 1 2021-08-24 15:59:22
6 NATIVE 이름  1234 UserApplicationCompleted 22 1 2021-08-24 15:59:22 1 2021-08-24 15:59:22

``` sql
select count(*) from temp
```

### 기부영수증 테이블에서 기부건당 max가 아닌 데이터를 확인하는 쿼리

``` sql
select count(*)
from temp a
where [a.id](http://a.id)!= (select max(id) from store_donation.donation_receipts b where b.donation_id=a.donation_id)
```

``` sql
select *
from store_donation.temp a
where [a.id](http://a.id)!= (select max(id) from store_donation.donation_receipts b where b.donation_id=a.donation_id)
```

3 NATIVE 이름  1234 UserApplicationCompleted 14 1 2021-08-18 14:49:43 1 2021-08-19 13:30:44
5 NATIVE 이름  1234 UserApplicationCompleted 22 1 2021-08-24 15:59:22 1 2021-08-24 15:59:22

=>SELECT * FROM store_donation.donation_receipts GROUP BY donation_id HAVING count(*) > 1; 검색해도 결과 같음

``` sql
select a.donation_id, max([a.id](http://a.id)
from temp a inner join store_donation.donation_receipts b on a.donation_id = b.donation_id
```

->X

``` sql
select a.donation_id, max([a.id](http://a.id)
from store_donation.donation_receipts a inner join store_donation.temp b on a.donation_id = b.donation_id group by donation_id
```

14 4
22 6

### 총 기부영수증 데이터

``` sql
SELECT count(*) FROM store_donation.donation_receipts ;
```

### 중복을 제거했을 때 테이블

``` sql
select count(distinct donation_id) from store_donation.donation_receipts ;
```

추정
두 데이터의 일부 컬럼이 같은 상황
쿼리를 통해 검증

### 중복을 제거했을 때 테이블 데이터 갯수와 같으면 검증됨

``` sql
select count(distinct donation_id, deductor_type, deductor_name, deductor_registration_no) from store_donation.donation_receipts ;
```

``` sql
select *
from store_donation.donation_receipts
where donation_id in (
SELECT donation_id FROM store_donation.donation_receipts GROUP BY donation_id HAVING count(*) > 1
);
```

### delte하기 (max값을 제외한 중복된 데이터 리스트)

``` sql
DELETE 
FROM store_donation.donation_receipts 
WHERE id IN (
select a.id
from store_donation.temp a
where a.id not in(select max(id) from store_donation.donation_receipts b where b.donation_id=a.donation_id) 
);
```

17:04:24	DELETE FROM store_donation.donation_receipts WHERE id IN ( select a.id from store_donation.temp a where a.id in(select max(id) from store_donation.donation_receipts b where b.donation_id=a.donation_id) )	Error Code: 1093. You can't specify target table 'donation_receipts' for update in FROM clause	0.000 sec

에러 발생

찾아보니 [https://velog.io/@khnn/TIL-DELETE에서의-서브쿼리-활용](https://velog.io/@khnn/TIL-DELETE에서의-서브쿼리-활용)


``` sql
DELETE 
FROM store_donation.donation_receipts e
WHERE e.id IN
(
select x.id from
 (
select a.id
from store_donation.temp a
where a.id not in(select max(id) from store_donation.donation_receipts b where b.donation_id=a.donation_id) 
) x
)
```

1	NATIVE	이름 	1234	UserApplicationCompleted	17	1	2021-08-18 14:45:11	1	2021-08-18 14:46:01
2	NATIVE	이름	    1234	UserApplicationCompleted	16	1	2021-08-18 14:46:26	1	2021-08-18 14:46:49
4	NATIVE	이름 	1234	UserApplicationCompleted	14	1	2021-08-18 14:49:43	1	2021-08-19 13:30:44
7	NATIVE	이름 	1234	UserApplicationCompleted	22	1	2021-08-24 15:59:22	1	2021-08-24 15:59:22
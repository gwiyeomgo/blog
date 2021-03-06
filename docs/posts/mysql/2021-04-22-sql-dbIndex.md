```
title: 인덱스 스캔
startDate: 2021-04-22
```
---

# 1. Full table scan
[Full table scan](https://en.wikipedia.org/wiki/Full_table_scan)

```
A full table scan (also known as a sequential scan) is a scan made on a database where each row of the table is read in a sequential (serial) order and the columns encountered are checked for the validity of a condition
```

전체 테이블 검색(순차 검색이라고도 함)은 데이터베이스에서 테이블의 각 행을 순차적(시리얼) 순서로 읽고 발견된 열이 조건의 유효성을 검사하는 검색입니다

# 2.index 정의

[Database index](https://en.wikipedia.org/wiki/Database_index)

A database index is a [data structure](https://en.wikipedia.org/wiki/Data_structure) that improves the speed of data retrieval operations(데이터 검색 작업) on a database table (at the cost of)(-을 희생하여,비용을 지불하여) additional writes and storage space to maintain the index data structure.

데이터베이스 인텍스는
데이터베이스 테이블에서
데이터 검색 작업의 속도를 증진시키는 자료 구조이다
추가 쓰기와 저장공간을 희생하여
인덱스 데이터 구조를 유지하기 위해서

Indexes (are used to)(~ 하는데 사용되다) quickly (locate)(위치하고 있다) data without having to search every row in a database table every time a database table is accessed.

인덱스들은 빠르게 데이터를 위치하는데 사용된다.
데이터베이스 테비을에 모든 행을 검색하는 것 없이
데이터베이스 테이블에 액세스할 때마다.

```
title: GORM 의 AutoMigrate 기능 
startDate: 2022-04-25
```
---

# 배경

어드민의 조직및 권한 관리 서비스 코드는 xorm 이 아닌 gorm 을 사용합니다.
xorm 에는 이 기능이 있는지 모르겠지만.
gorm 에는 entity 값으로 db 를 자동으로 테이블을 생성해주는 코드가 존재한다


### [Auto Migration](https://gorm.io/docs/migration.html) 코드

```
type User struct {
  ID     uint
  Name   string
  Age    int
  Gender string
}
```
```
db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
})
  
db.AutoMigrate(&User{}, &Product{}, &Order{})
```

# Auto Migration 은 table 에 컬럼도 자동으로 추가해 주는가?

현재 우리가 사용하는 권한 관리 서비스 코드에서는 update_by,created_by 가 존재하지 않는다.
삭제 이슈가 발생했고 (누군가 역할을 삭제했다)
마녀사냥이 아닌! 시스템적으로 기록을 남기기 위해서 삭제한 사람및 수정한 사람의 Id 를 남기기록 했다.

기존에는 없었기 때문에 처음에는 alter문으로 추가해야하나 고민했다.
그러다 코드를 모두 수정하고 실행시키니 table에 컬럼이 추가되었다.

```
AutoMigrate will create tables, missing foreign keys, constraints, columns and indexes. 
It will change existing column’s type if its size, precision, nullable changed.
It WON’T delete unused columns to protect your data.
```
automigrate는 컬럼도 추가해 준다고 한다.

# 그런데...
stuct 의 type 이 uint 일때 왜? bitint로 들어가지?

# uint ? int?
int 값은 음~양 영역,uint 값은 unsinged integer 로 부호가 없다는 것(양수만)
음의 수가 필요 없어서 uint 가 int 보다 많은 값을 표현할 수 있다
```
int	–2,147,483,648 ~ 2,147,483,647
uint	0 ~ 4,294,967,295
```

# 시니어님께 질문~ 받은 답변
> uint 를 DB의 필드로 연결하면 int 보다 더 큰 값을 써야 하기 때문에 bigint 로 매핑하는 것으로 판단이 됩니다.

mysql 에 unsinged 데이터 타입이 없는 지 찾아보니

`id INT(11) UNSIGNED` 처럼  int나 bigint 데이터 타입과 함께 UNSIGNED 써야하나보다....
잘모르겠음...
https://ellieya.tistory.com/134
https://jsonobject.tistory.com/378




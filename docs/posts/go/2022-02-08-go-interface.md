```
title: golang 인터페이스
startDate: 2022-02-08
```
---

메서드 (리시버가 있는 경우)
리시버는 메서드가 속한 타입을 알려준다

클레스의 인스턴스와 비슷

메서드가 구조체에속해있다?
메서드를 사용하는 이유는 코드 응집도를 높이기 위해


인터페이스
go에는 클레스와 상속이 없다

type A interface{
//메서드 집합
}

하나의 기능을

오버라이딩
= 재정의

메서드의 묶음을 새로운 타입으로 선언한것이 인터페이스
즉 중간역할 연결자

덕 타이핑
인터페이스 여부를 확인할때 사용한다

인터페이스 => 오버라이딩?

택배랑 매장 등록을 양쪽에서하는데 조금씩 다름
중복되는게 너무 많으니까 인터페이스를 사용해서 맞춰서 쓰고 있음

validate campaign
```
type DonationInterface interface {
SetCampaign(string, string, string)
SetSiteCode(string)
}
```
map에서 interface{} 타입은 그냥 값이 없는 상태로 위에서 말하는 것과 다름
```
title:  golang 을 쓰면서 omitempty 를 사용한 경험
startDate: 2022-06-09
```
---


# 배경

```
type MemberInfo struct {
ID            int64     json:"ID"  `
Name          string    json:"title"`
Address       string    json:"address,omitempty"`
}
```
golnag 을 사용하면 위 코드와 같이 struct 를 만들어서
요청의 body 의 json 값을 받거나 
응답을 보내기전 dto 로 값을 채워 보낸다.

예를들어 
회원의 등록된  주소(address)가 없다면
프론트에서 받은 응답 json 에 key 값이 안보이길 원한다.
 
# omitempty 를 표시했을 때...

보통 프론트에서 받는 응답값을 보면
1.omitempty 표시 안했을 떄
```
{ID :1,name:"coco",address:""}
```
1.omitempty 표시 했을 떄
```
{ID :1,name:"coco"}
```




[참고](https://wookiist.dev/127)
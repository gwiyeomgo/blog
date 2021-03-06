```
title: javascript localstore 사용 경험 
startDate: 2022-06-09
```
--- 

# 배경
지금 회사에서는 오픈소스로 만든 어드민 코드를 사용한다.
그 어드민을 사용한 이유는 
어려운 오픈소스가아닌 우리에게 도움을 주시는 개발자가 만든 코드여서
수정및 기능 개선을 요청할 수 있기 때문에 해당 코드를 사용했다.

# 그런데..
우리 회사의 오프라인 매장,센타 등 기부를 등록하는 곳을 `등록처` 라 부른다
해당 어드민에 조직도 기능이 있고
이 기능은 조직도당 하나의 등록처를 갖는다

한 역할이 여러 등록처를 관리해야하는 문제가 발생했다.

# 그래서..

복수의 등록처를 갖은 회원은 등록처를 선택할 수 있도록 수정하는 작업을 맡았다.


# 수정내용
[getter setter 관련해서 쓴 글에서](2022-06-17-javascript-getter-setter.md)
에서 로그인 했으때 회원 정보를 가져온다. 
이때 이 회원은 어드민 관리자로 주로 role ,permmision 등 가져오는데 이떄 siteCode를 가져올 수 있다.

문제는 기존 시스템에서는 복수의 siteCode 를 받아오기 떄문에
이중 1개만 받아서 저장할 곳이 필요했다.
또한 여러개 siteCode 목록중에서 1개만 선택시 저장할 곳이 필요했다.

다시 해당정보를 서버로 보내 저장할지 아니면 브라우저에 저장할지 고민했고
최소수정을 위해 브라우저에 저장하기로 했다.

# 이때 사용한 localstore 는 뭐지?

> localStorage 에 값을 추가한다.
`window.localStorage.setItem(key값,value 값)`

```
const memberResponse = await axios.get(API_URL + "/members");
let site = Object.keys(memberResponse.data).includes("siteCodes")?memberResponse.data.siteCodes[0] :""
window.localStorage.setItem("siteCode",site ?site.code:site)
MemberContext.memberInformation = memberResponse.data;
```

> localStorage 에 값을 가져온다.
` window.localStorage.setItem(key값,value값)`
그리고 적용된 siteCode를 사용하기 위해서 `history.go(0)`를 써서 새로고침했다.
```
<Select
    defaultValue={window.localStorage.getItem("siteCode")}
    style={{width: 160 ,marginRight:10}}
    onChange={(value)=>{
        window.localStorage.setItem("siteCode",value)
        history.go(0);
}}>
    {MemberContext.memberInformation.siteCodes.map((site) =>
        <Select.Option key={site.code} value={site.code}>{site.name}</Select.Option>)
    }
</Select>
```


https://coding-restaurant.tistory.com/264
https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
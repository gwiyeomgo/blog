```
title: javascript 숫자 유효성 검사 경험
startDate: 2022-04-19
```
--- 

1. 입력창에 회원번호,기부번호를 입력한다
2. 직접 키보드로 입력하면서 문자가 포함된다

```
    if (searchText.length > 0) {
      switch (searchType) {
        case "memberId":
          if(isNumeric(searchText) === false){
            return message.error("회원번호가 올바르지 않습니다.");
          }
          break;
        case "id":
          if(isNumeric(searchText) === false){
            return message.error("기부번호가 올바르지 않습니다.");
          }
          break;
      }
    }
```

출처
[How can I check if a string is a valid number?](https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number)

```
  const NumberValidator = (str) => {
    if (typeof str !== "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str)) //true && true
  }
```

위 예제처럼 사용하면 str 에 숫자만 있는지 확인이 가능하다

isNaN 함수는 숫자를 넣으면 false 를 반환한다. 
isNaN 함수는 string 과 숫자가 함께있는 문자를 입력하면 true 값을 반환한다

```
isNaN(123)         // false
isNaN('123')       // false
isNaN('test')      // true
isNaN('123test')   // true

```

사실 위 예제에서 !isNaN(str) 만 사용해도 확인이 가능하지만
!isNaN(parseFloat(str))을 쓴 이유는?

```
isNaN('')          // false
isNaN(' ')         // false
isNaN(false)       // false
```
이 경우도 false 를 반환하기 때문에 ...
한번 더 확인이 필요하다
ex) 스페이스를 클릭하고 검색하면 검색이 된다... 공백을 막기 위해

```
console.log(!isNaN(parseFloat(' '))) //false
console.log(!isNaN(' '))             //ture
```

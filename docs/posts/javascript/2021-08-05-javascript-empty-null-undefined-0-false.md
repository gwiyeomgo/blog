```
title: JavaScript 빈문자,null,undefined,0,false  잘알자!!!
startDate: 2021-08-05
```
---

# 배경
javascript 로 개발할때

`빈문자,null,undefined,0,false` 

일때 제대로 어떤값이 알지 못하면 에러를 발생시킬 수 있다.
자세하게 알아보자

# if 조건문에서 해당 타입은 통과될까?

const test = 빈문자(""),null,undefined,0,false
if(!test){
console.log("여기 들어옴" )
}

일경우

#  공백과 없는거는 어떤 차이지??


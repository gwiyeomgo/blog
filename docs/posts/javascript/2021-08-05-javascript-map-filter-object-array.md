```
title: JavaScript 데이터를 가공해보자
startDate: 2021-08-05
```
---


# 배경

react로 코드를 쓸 때
api에서 호출받은 결과를 가공하는 일이 많다고 느꼈다

간단한 예시와 MDN에서 찾은 내용을 정리하려고 한다.

## array to object
https://www.delftstack.com/ko/howto/javascript/array-to-objects-javascript/
https://developer-doreen.tistory.com/74

## How can I add a key/value pair to a JavaScript object
https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object


## how to know value in array
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


## how to make array unique
https://appdividend.com/2022/01/28/how-to-get-distinct-values-from-array-in-javascript/
```
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter(unique)

console.log(uniqueAges)
```

## how to push item to Array in javascript
https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/

##  how to get tiem value in Array
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values
https://www.codegrepper.com/code-examples/javascript/js+find+value+in+object
##  find value by key in object javascript
https://www.codegrepper.com/code-examples/javascript/find+value+by+key+in+object+javascript

### How to get a key in a JavaScript object by its value
https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value

## map filter
```
console.log([1, 2, 3].map(e => {
        return e + 1
    }).filter((e) => e > 2))

    console.log([1, 2, 3].map(e => e + 1).filter((e) => e > 2))


    console.log([1, 2, 3].map(e => {
        e = e + 1;
        e = e + 2;
        return e    }).filter((e) => e > 2))

```
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

        https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

        https://www.codegrepper.com/code-examples/javascript/javascript+sort+array+of+objects

        https://stackoverflow.com/questions/47841899/js-map-return-object

      

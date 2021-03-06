```
title: golang Call by value
startDate: 2021-08-22
```
---


# Call by value
값 복사되어 값 보존된다
복사가 되기 때문에 메모리량이 늘어난다

# Call by reference
복사하지 않고 직접 참조
직접 참조를 해서 원래 값이 영향을 받음
 No newline at end of file

메모리 주소를 표현하는 포인터
`&` goes in front of a variable when you want to get that variable's memory address.

### call by value 값에 의한 호출

```
package main
 
import "fmt"
 
func inc(i int) {
    i = i + 1
}
 
func main() {
    i := 10
    inc(i)
    fmt.Println(i)
}

```
실행하면 10
### call by reference

```
package main
 
import "fmt"
 
func inc(i *int) {
    *i = *i + 1
}
 
func main() {
    i := 10
    inc(&i)
    fmt.Println(i)
}

```
실행하면 11

# 포인터 리시버
func (w *Wallet) DepositWithValueReceiver(amount int) {
    w.balance += amount
}

// Production add: 0xc000016378, value: 0
// Test add: 0xc000016378, value: 10
struct 타입만! 포인터 리시버가 자동 역참조해준다.


https://thebook.io/006806/ch02/04/02/
https://programmers.co.kr/learn/courses/13

https://ponyozzang.tistory.com/162
https://www.npmjs.com/package/react-router-ga

예시

```
package example

type Person struct {
    Age  uint
    Name string
    BirthDay string
}

func (p *Person) ChangeAge (newAge uint) {
    p.Age = newAge
    /*if p.Age != nil {
    }*/
}

func (p *Person) SetBirthDay(birthday *BirthDay) {
    p.BirthDay = birthday.Day
    birthday.Year = "2002"
}

type BirthDay struct {
    Year string
    Month string
    Day string
}


```

```
package example

import (
    "github.com/stretchr/testify/assert"
    "testing"
)

func TestPerson_ChangeAge(t *testing.T) {
    //given
    person := Person{
        Age:  29,
        Name: "철수",
    }

    //when
    person.ChangeAge(2)

    //then
    actual := person.Age
    expected := uint(2)

    assert.Equal(t, expected, actual)
}

func TestPerson_SetBirthDay(t *testing.T) {
    //given
    person := Person{
        Age:  29,
        Name: "철수",
    }
    /*
    person := Person{
        Age:  29,
        Name: "바보",
    }*/
    //2개의  인스턴스 생성=> 메모리2개
    //when
    birthDay := BirthDay{
        Year:  "1998",
        Month: "06",
        Day:   "04",
    }

    person.SetBirthDay(&birthDay)

    //then
    actual := person.BirthDay
    expected := "04"

    assert.Equal(t, expected, actual)
    assert.Equal(t, birthDay.Year, "2002")
}

```
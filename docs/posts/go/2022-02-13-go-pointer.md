```
title: golang pointer 
startDate: 2022-02-13
```
---

value 를 복사하는게 아니라 변수의 memory address 를 저장하고 싶은거라면 
`&` 붙여준다.


```
import (
"fmt"
)

func main() {
a:=2
b:=&a
a=10
fmt.Println(*b)

}
```
a 의 type 은 int  
b의 type 은 int 에 pointer 다
(var b *int) = b가 int 를 가지고 있는 memory address

`*`를 붙이면 memory address 통해 그 안에 있는 value 를 볼 수 있따

### 복사본이 아니라 원본이 필요한 상황?

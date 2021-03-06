```
title: golang stacktrace 적용 경험
startDate: 2022-02-09
```
---


### 배경
err가 발생했을때 errorStackTrace 을 알아야 한다.

```

stack := make([]byte, 2048)
length := runtime.Stack(stack, true)
errorStackTrace := fmt.Sprintf("[ERROR] %v %s\n", err, stack[:length])

```


[package ](https://www.cs.ubc.ca/~bestchai/teaching/cs416_2015w2/go1.4.3-docs/pkg/runtime/index.html)
[runtime](https://go.dev/src/runtime/stack.go)
```
Package runtime /contains/ operations /that interact with Go's runtime system, such as functions /to control goroutines.
Package runtine 포함한다 기능 = go의 runtime system과 상호작용하는,기능과 같은/goroutine을 제어하는
```
It also includes the low-level type information used by the [reflect package](https://pkg.go.dev/reflect);
또한 reflect package 에서 사용하는 저수준 유형 정보도 포함합니다.
```
see reflect's documentation for the programmable interface to the run-time type system.
```
reflect 문서를 참조하십시오/run-time type system에 대한 프로그래밍 가능한 인터페이스에 대한


### 무슨말일까..
stack에 언제 err가 쌓이는 거지?
런타임 프로그래밍이 뭐지?


runtime pacakge가 [runtime library](https://en.wikipedia.org/wiki/Runtime\_library) 인가?


stack trace 가뭐길래 runtime package가 stack 함수를 갖고 있지?
\*스택 추적 은 프로그램 실행 중 특정한 시점에서의 스택 프레임에 대한 리포트이다.
\*익셉션이 발생하였을 때 프로그램이 실행중에 호출한 메소드의 리스트


[참조1](https://stackoverflow.com/questions/3900549/what-is-runtime?rq=1)
[참조 2](https://hashcode.co.kr/questions/2162/stack-trace%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%97%90%EB%9F%AC%EB%A5%BC-%EB%94%94%EB%B2%84%EA%B9%85%ED%95%A0-%EB%95%8C-%EA%B7%B8%EA%B2%83%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98%EC%9A%94)
[stack](https://pkg.go.dev/runtime#Stack)

### 아..
스택 이 빠른 메모리 인데
실행되는 프로세스가 쌓인다
ex)변수 선언되면 다 쌓임



# 20220613 
#배경
고사이렌을 통해서 장애가 발생하면
개발자들이 볼 수 있도록 업무가 생성된다
이때 stacktrace 를 보여주려고 했지만 실패햇었다
현재 err 를 쌓을 때 현재 코드에 문제가 있어서 못함

#작업내용
github 의 라이브러리를 받아서 사용
=>api 의 에러 발생 시 stack 에 쌓이도록 수정

에러 발생시 stack 을 고사이렌에 보내도록 수정
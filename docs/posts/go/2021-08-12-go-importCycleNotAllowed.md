```
title: golang 순환참조
startDate: 2021-08-12
```
---



# 배경
1. serviceA 에서 다른 serviceB 의 함수를 호출하려고 한다.
2. serviceB에서 이미 serviceA를 호출하고 있따
3. 코드가 실행되지 않는다.

결국 serviceA에 함수를 serviceB에 옮기고 사용했다

이럴경우 어떻게 해야 할까?

관련 현상을 검색해보니 이 현상은 순환참조 불가하다고 한다

### golang 순환참조
정확히 순환참조는 뭐지?

https://medium.com/daangn/how-to-write-a-testable-golang-code-4c0e67612bb8

https://ezaurum.com/2020/03/Golang%EC%97%90%EC%84%9C-%EA%B0%99%EC%9D%80-%ED%8C%A8%ED%82%A4%EC%A7%80%EC%97%90-%EC%97%AC%EB%9F%AC-%EB%8F%84%EB%A9%94%EC%9D%B8-%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EB%84%A3%EC%9C%BC%EB%A9%B4-%EC%95%88-%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0/

https://www.popit.kr/%EC%9E%90%EB%B0%94-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-go-%EC%9E%A0%EA%B9%90-%EC%82%AC%EC%9A%A9%ED%95%B4-%EB%B4%A4%EC%8A%B5%EB%8B%88%EB%8B%A42/



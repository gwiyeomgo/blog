```
title: golang 정보 은익?(public, private)
startDate: 2021-08-22
```
---

# 정보 은익?


go는 식별자의 첫 번째 문자가 대문자인지 소문자인지에 따라 public과 private 를 구분한다.

마찬가지로 구조체의 필드도 대문자로 시작하는 필드는 패키지 외부에서 접근할 수 있고

소문자로 시작하는 필드는 패키지 내부에서만 접근할 수 있다


# 캡술화는 어떻게 하지?
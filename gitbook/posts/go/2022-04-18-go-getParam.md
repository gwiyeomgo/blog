```
title: echo PathParamsBinder 사용 경험
startDate: 2022-04-18
```
---

# 배경
왜 썼었지?

# 사용 코드
```
var application service.ApplicationRepository

	var id int64
	var key int64
	if err := echo.PathParamsBinder(c).Int64("id", &id).Int64("key", &key).BindError(); err != nil {
		return err
	}
```

#참고
https://github.com/labstack/echo/blob/master/binder_test.go

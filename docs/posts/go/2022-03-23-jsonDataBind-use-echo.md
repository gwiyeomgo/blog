```
title: golang json 데이터 bind
startDate: 2022-03-23
```
---

# 배경

1. 파일 업로드 기능이 필요
2. 파일을 S3 에 저장하고 url을 받고 있음
4. client 에서 service로 여러개의 파일을 보내야 하는 상황
```
{data:"https://test",data2:"https://test2"}
```
4. client 에서 service로 json 데이터를 전송
```
{
  files:{data:"https://test",data2:"https://test2"}
}
```
### (echo contex 를 사용할 경우) 서비스 에서는 어떻게 json 형태를 인식할까?

go에서는 encoding/json 패키지를 사용해서 JSON 인코딩을 합니다.


### Data struct filed 에 json.RawMessage 타입을 지정합니다.

```
type Data struct {
  files             json.RawMessage     `query:"files'"`
}
```

### echo.Context  `c.Bind(&Data)` 를 사용하면 Data struct 에 bind 됩니다.





[참고](https://mingrammer.com/translation-go-walkthrough-encoding-json-package/)

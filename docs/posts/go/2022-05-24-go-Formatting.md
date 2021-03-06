```
title:  데이터 formatting 경험
startDate: 2022-05-24
```
---

# 배경
golang 코드를 짜면서 데이터의 형태를 변환하는 경우가 많다..
요청값의 데이터를 바인드 할 때
혹은 내부 로직에서 데이터 타입을 바꿀 때
또는 응닶값의 데이터의 타입을 수정할때 등... 여러번 찾아서 코드를 수정한다.
한번쯤 정리하는것도 필요하다고 느낀다.

우선 길게 쓰고
이후 수정

### 내상황
1. items 의 map 값을 string 으로 받았다.
```
var items []map[string]string
if err := builder.Find(&items); err != nil {
	context.Log(c).Errorln(err.Error())
}
```

2. 응답값은 ` []interface{}` 형태이다.
```
id, _ := strconv.ParseInt(item["id"], 10, 64)
var confirmed map[string]interface{}
json.Unmarshal([]byte(item["confirmed"]), &confirmed)
result := map[string]interface{}{
"ID":              id,
"confirmed":       confirmed,
}
```
3. 결국 응답값을 만들때 string 으로 넣어주고 있었다.

# string to int64
* `id, _ := strconv.ParseInt(item["id"], 10, 64)`
# []byte to json
* `func Unmarshal(data []byte, v interface{}) error {`
# json to []byte
*`func Marshal(v interface{}) ([]byte, error) {`
```
title:  react-csv 모듈로 파일 다운로드 만든 경험
startDate: 2022-04-15
```
--- 

# 배경
1.어드민에서 화면에 목록을 다운받고 싶은 요구 발생


# 작업내용
파일 다운로드

# 방법1
현재 저의 코드에서는 react-csv 컴포넌트를 import 받아서 사용합니다.
```
import { CSVLink } from "react-csv";

headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

<CSVLink
  data={data}
  filename={"my-file.csv"}
  headers={headers}
>
  Download me
</CSVLink>;
```
출처 : https://www.npmjs.com/package/react-csv

1.CSVLink 를 사용해서 [] 형태 데이터를 그대로 다운 받을 수 있었다.
2. 그런데 기획쪽의 요청은 한글 name을 추가를 요청했다.

```
//2개 [] 을 [{},{}]로 변환
export const makeCsvHeaders = (headerValues,dataKeys) => {
  let fileHeader = new Array(dataKeys.length)
  dataKeys.length > 0 && dataKeys.forEach((key,index) =>
      fileHeader[index] ={
        key:key,
        label: headerValues[index]
      });
  return fileHeader
}
```

makeCsvHeaders

# 내가 추가한 작업



# 방법2

1.프론트에서 버튼 클릭
2.backend에서 버튼 다운로드

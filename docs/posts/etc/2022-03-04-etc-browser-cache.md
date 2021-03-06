```
title: 브라우저 cashe 는 어떻게 관리하지?
startDate: 2022-03-04
```
--- 

## 배포를 해도 발생하는 버그는 어떻게 해야 할까?

## 배경
최근에 사용자가 발생시키는 오류에 대해 
전화가 오기전에 미리 대비할 수 있도록
장애 대응을 모니터링 할 수 있는 프로젝트를 진행했다.

방법은 에러가 발생했을때
요청,응답,에러스택 정보를 
dooray 이슈 등록로 등록되는 시스템이다.

처음 적용하고 나서 메일 폭탄을 받았었다
나뿐만 아니라 개발자 모두다 스팸메일을 잔득 받은 것이다.

이 상황에 시니어 개발자님은 쓴소리로 스팸이 도는 시스템은 아무도 보지 않는다고
명심하라고 말씀해 주셨다.

핫픽스로 에러를 처리해 올리고 싶었지만 
이번주에 배포되면 안되는 이슈가 있어서 개발자분들께 양해를 구하고 한주간 다들 같은 메일을 받았다

상당히 속상하고 빨리 처리하고 해결해야 겠다고 느꼈다.

배포 당일이 되었고
개발계에서 테스트를 마친 수정된 코드가 배포가 되었다.

그런데 같은 에러가 발생했다. 
다행이 메일의 숫자는 확 줄었다
(숫자 세어보기)

그리고 100개의 매장중에 10개 미만의 매장에서만 발생했다.


에러를 제현하기 위해서
운영계 테스트 계정을 통해 기능을 동작시켰지만 발생하지 않았습니다.

클라이언트(전국 매장 pc)의 브라우저 캐시 때문에 사용자들이 버그가 여전히  발생 하는 경우 같다는 생각이 들었다.


사용자의 브라우저 캐시를 코드에서 관리할 수 있을까요?

인터넷에서 검색 했을 때 html meta tag 를 추가해 캐시 사용전에  재검증을 하는 방법을 찾았고 
적용해 보려고 한다.

## 참고
https://toss.tech/article/smart-web-service-cache
https://velog.io/@mgm-dev/%EA%B0%84%EB%9E%B5-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%BA%90%EC%8B%9C%EC%97%90-%EB%8C%80%ED%95%B4


해당 글을 읽고 공부해 봤다.

우리의 캐시 유효 기간이 있나?

`Cache-Control 헤더값` 응답헤더에 없다..
```
(max-age=31536000 이기 때문에, 이 리소스는 1년(31,536,000초)동안 캐시할 수 있다)

```

재검증?

no-cache?
캐시는 저장하지만 사용하려고 할 때마다 서버에 재검증 요청을 보낸다

토스 기술 블로그를 보니
새로 배포가 이루어 지만 HTML 리소는 바뀔 수 있기 때문에
브라우저는 항상 HTML 파일을 불러올 때 새로운 배포가 있는지 확인하도록 
`Cache-Control`값을 `max-age=0,s-maxage=31536000` 을 설정한다고 한다.
(이로써 브라우저는 HTML 파일을 가져올 때마다 서버에 재검증 요청을 보내고, 그 사이에 배포가 있었다면 새로운 HTML 파일을 내려받습니다.)
*변경내용
`max-age의 최대치인 max-age=31536000`
새로 배포가 일어나지 않는 한, 브라우저는 캐시에 저장된 JavaScript 파일을 계속 사용



#어떻게?

 <meta http-equiv="Cache-Control" content="max-age=0,s-maxage=31536000">

1년동안 캐시를 유지하지만 배포일어나면 재검증

# 참고
https://thewebdev.info/2021/10/03/how-to-clear-browser-cache-in-react/
https://gahyun-web-diary.tistory.com/16

캐시를 사용하지 않는 방법도 있긴하다


https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cache-Control

캐시사용 x
캐쉬가 되지 않게 하는 속성으로 매번 새로운 페이지를 서버에 접속해서 가져옴
<meta http-equiv='cache-control' content='no-cache'>
// not always leads to immediate resource expiration
//캐쉬 완료(파기)시간 정의.
     단위는 분단위
     즉, 0분이 지나면 캐쉬를 지우고 새롭게 다시 읽어온다.
<meta http-equiv='expires' content='0'>
//캐쉬가 되지 않게 하는 태그 즉, 매번 새로운 페이지를 열게된다.
<meta http-equiv='pragma' content='no-cache'>

하지만
For this specific case what you can do is to tell the browser not to cache your page, by using below meta tags inside <head> tag: This is temporary solution and for permanent solution, you should handle this using appropriate headers sent by your API/backend.

(https://stackoverflow.com/questions/51207570/how-to-clear-browser-cache-in-reactjs)
api 에서 설정하는 거는 이후에..
`.setHeader('Cache-Control', 'no-cache')`






# 
캐쉬의 파기를 위한 속성으로는 Expires 외에 아래와 같은 다양한 방법이 있습니다. 보통 개발 시에는 캐쉬가 있으면 수정사항이 반영이 안되기 때문에 캐쉬를 없애는 것을 중요하게 생각을 하는데 서비스가 안정화 된 운영 시에는 캐쉬를 지정하여 페이지 속도를 최적화 하는 것이 좋습니다.
그렇기 때문에 SEO Friend에서는 캐쉬를 설정하는 것을 권장합니다
https://www.next-t.co.kr/blog/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84%EC%B5%9C%EC%A0%81%ED%99%94-SEO-%ED%85%8C%ED%81%AC%EB%8B%88%EC%BB%ACSEO-%EB%A9%94%ED%83%80%ED%83%9C%EA%B7%B8-metatags-expires-%EC%86%8D%EC%84%B1


expire 0 ? -1?
https://stackoverflow.com/questions/11357430/http-expires-header-values-0-and-1



잘정리됨
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kkadda&logNo=110123278506

```
title: react useCallback
startDate: 2021-12-08
```
--- 

# 배경

현재 페이지 단위로 function 을 만들고 해당 페이지에 접속했을 때 최초 데이터를 조회하는 코드를 사용한다


```

  const load = useCallback(() => {
    Service.getStatuses({
      page: 1,
      pageSize: 50
    }).then((res) => SetStatus(res.data));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

```

그런데 callback 은 왜 사용된건지 모르겠다.


useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.
리액트 개발을 하실 때, useCallback, useMemo, React.memo 는 컴포넌트의 성능을 실제로 개선할수있는 상황에서만 하세요.

예를 들어서, User 컴포넌트에 b 와 button 에 onClick 으로 설정해준 함수들은, 해당 함수들을 useCallback 으로 재사용한다고 해서 리렌더링을 막을 수 있는것은 아니므로, 굳이 그렇게 할 필요 없습니다
```
title:  react 함수형에서 useEffect 
startDate: 2021-08-05
```
---

# 배경
react 를 사용해서 프로그래밍을 하면서 console에 나타나는 경고를 모두 제거하기로 계획했다.
실제로 이전까지는 경고가 나타나는지 몰랐었는데 아래와 같은 경고를 만났다

>React Hook useEffect has a missing dependency: 'load'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps).
```

  useEffect(() => {
    load();
  },[]);

```
경고를 없애기 위해서  []를 제거했다.
그런데 load()가 얼마나 호출되는지 모르겠다

```
 useEffect(() => {
    load();
  });
```
문제는 해결됬지만 정확하게 useEffect이 어떤 역할을 하는지 어떻게 쓰는 건지 잘 모르겠다.
지금부터는 useEffect 예제를 통해 사용법을 알아보려고 한다


# useEffect 는 뭐지?

hooks 중에 useEffect

* [useEffect](https://ko.reactjs.org/docs/hooks-reference.html#useeffect) 에 전달된 함수는 화면에 렌더링이 완료된 후에 수행됩니다.
* 기본적으로 동작은 모든 렌더링이 완료된 후에 수행됩니다만, 어떤 값이 변경되었을 때만 실행되게 할 수도 있습니다.

# useEffect에 두 번째 인자
> 두 번째 인자로써 []을 전달하는 것이 친숙한 componentDidMount와 componentWillUnmount에 의한 개념과 비슷
 
> 이 인자는 effect 가 종속되어 있는 값의 배열입니다. 

```
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);

```
> props.source 가 변경될 때에만 구독이 재생성될 것입니다
>
# useEffect 안에 빈배열[]은 뭐를 의미하지?
> effect를 수행하고 (mount를 하거나 unmount 할 때) 그것을 한 번만 실행하고 싶다면 두 번째 인자로 빈 배열([])을 전달할 수 있습니다.
 이를 통해 effect는 React에게 props나 state에서 가져온 어떤 값에도 의존하지 않으므로, 다시 실행할 필요가 전혀 없다는 것을 알려주게 됩니다. 




# Hooks 의 Lifecycle
![이미지](https://i.stack.imgur.com/7q1jC.jpg)
1. componentDidMount 처럼 구현

``` javascript
useEffect(() => {
  // Your code here
}, []);
```

### empty array? ( [] )

Without the second parameter the useEffect hook will be called on every render of the component which can be dangerous.

``` javascript
useEffect(() => {
  // Your code here
});
```

2. componentWillUnmount

``` javascript
 useEffect(() => {
    return () => {
        console.log('componentWillUnmount');
    };
   }, []);
```

https://ko.reactjs.org/docs/hooks-faq.html#from-classes-to-hooks
https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
https://react.vlpt.us/basic/16-useEffect.html
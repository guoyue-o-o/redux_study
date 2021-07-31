# redux使用

## 问题？？？？？？

### 1.想要发送一个action？

导入store

store.dispatch() ---> reducer( arg1(state), arg2(actionType) ) ---->return ----->store


### 2.某个组件想要接收state？

导入store

```

<!-- 组件加载完毕之后，注册监听 -->
store.subscribe(() => {
    <!-- 拿到store返回的数据 -->
    store.getState()
})

<!-- 组件销毁，移除监听 -->

```


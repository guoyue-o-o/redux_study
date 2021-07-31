# react-redux

redux官方推出

## 1.概述

redux 和react之间的关系: redux 支持angular, 原生js, react

react框架是以组件进行驱动

## 2.组成

- **Provider**

其实是个组件，能够使整个app的组件都能拿到state

- **connect** 

关联组件和store,用于加强

## 3.Provider

- 包裹在根组件最外层
- 接收store属性作为props, 通过context往下传递，这样react(任何层级)组件可以通过context获取store

解决了深级别组件，想要拿到store必须一层一层进行传递

## 4.connect

- Provider内部组件想要使用state的数据，就必须要connect进行一层包裹封装，必须要用connect加强
- connct 方便我们组件能够获取到store中的state

connect实现原理，类似高级组件，接收组件返回新组件

# 总结：

- 1.react-redux是redux官方推出用于配合react的绑定库
- 2.有两个重要组成部分
- 3.Provider本质上也是组件，包裹在根组件最外层，让组件能够获取到store, 接收store作为属性
- 4.connect，接收Provider提供的store, 用于加强store和组价之间的联系



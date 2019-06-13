# react-convertor

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Convertor 组件只接受两个 child，并根据配置展示其中的一个

## 安装

```sh
npm i @aximario/react-convertor -S
```

## API

| 属性 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- |------- |
| convert | 是否展示第二个孩子 | boolean | false |
| mode | 展示方式，`'exist','display'` exist 通过切换dom控制，display 通过样式控制，使用 display 时会在传入的孩子外面包一层 div | string | exist |

## 使用

```jsx
// 展示 pause
<Convertor>
    <p>pause</p>
    <p>resume</p>
</Convertor>

// 展示 resume
<Convertor convert>
    <p>pause</p>
    <p>resume</p>
</Convertor>

// 展示 pause 方式为通过样式控制
<Convertor display="display">
    <p>pause</p>
    <p>resume</p>
</Convertor>
```

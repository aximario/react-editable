# react-confirm-convertor

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

ConfirmConvertor 组件只接受两个 child，并根据配置展示其中的一个，点击编辑展示第二个孩子，点击确定和取消返回显示第一个孩子，编辑，确定和取消操作提供有相应的监听事件

## 安装

```sh
npm i @aximario/react-confirm-convertor -S
```

## API

| 属性      | 描述                                                                                                                        | 是否必填 | 类型     | 默认值 |
|-----------|-----------------------------------------------------------------------------------------------------------------------------|----------|----------|--------|
| mode      | 展示方式，`'exist','display'` exist 通过切换dom控制，display 通过样式控制，使用 display 时会在传入的孩子外面包一层 div      | 否       | string   | exist  |
| onEdit    | 点击编辑触发，如果返回一个 promise 或者监听函数中有 await，则会等待函数执行完成后才显示第二个孩子                           | 否       | function | -      |
| onConfirm | 点击确定触发，如果返回一个 promise 或者监听函数中有 await，则会等待函数执行完成后才显示第二个孩子，过程中确定会变成 loading | 否       | function | -      |
| onCancel  | 点击取消触发，如果返回一个 promise 或者监听函数中有 await，则会等待函数执行完成后才显示第二个孩子                           | 否       | function | -      |

## 使用

```jsx
<ConfirmConvertor>
  <p>200</p>
  <input />
</ConfirmConvertor>

// 监听函数不返回，默认执行完成后显示第一个孩子
<ConfirmConvertor
  mode="display"
  onEdit={() => { console.log('edit') }}
>
  <p>200</p>
  <input />
</ConfirmConvertor>

// 监听函数返回 promise，等待执行完成后显示第一个孩子
<ConfirmConvertor
  mode="display"
  onEdit={() => Promise.resolve()}
>
  <p>200</p>
  <input />
</ConfirmConvertor>

// 监听函数有异步操作，等待执行完成后显示第一个孩子
<ConfirmConvertor
  mode="display"
  onEdit={async () => { await request() }}
>
  <p>200</p>
  <input />
</ConfirmConvertor>
```

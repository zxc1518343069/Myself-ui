# Input 输入框
通过鼠标或键盘输入字符

## 基础用法

<br>

<demo-block>
:::slot source
<input-base></input-base>
:::

:::slot highlight
```html
<template>
    <ac-input v-model="value" type="text" placeholder="请输入内容"></ac-input>
</template>

<script>
  export default {
    name: 'base',
    data(){
      return{
        value:''
      }
    }
  }
</script>
```
:::
</demo-block>

## 禁用状态

<br>

<demo-block>
:::slot source
<input-disable></input-disable>
:::

通过 `disabled` 属性指定是否禁用 `input` 组件

:::slot highlight
```html
<template>
    <ac-input v-model="value" type="password" placeholder="请输入内容" disabled></ac-input>
</template>

<script>
  export default {
    data(){
      return{
        value:''
      }
    },
  }
</script>
```
:::
</demo-block>

## 可清空

<br>

<demo-block>
:::slot source
<input-clearAble></input-clearAble>
:::

使用 `clearable` 属性即可得到一个可清空的输入框

:::slot highlight
```html
<template>
    <ac-input v-model="value" type="text" placeholder="请输入内容" clearable></ac-input>
</template>

<script>
  export default {
    data(){
      return{
        value:''
      }
    }
  }
</script>

```
:::
</demo-block>

## 密码框

<br>

<demo-block>
:::slot source
<input-showPassword></input-showPassword>
:::

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

:::slot highlight
```html
<template>
    <ac-input v-model="value" type="text" placeholder="请输入内容" show-password></ac-input>
</template>

<script>
  export default {
    data(){
      return{
        value:''
      }
    }
  }
</script>

```
:::
</demo-block>

## 带 `icon` 的输入框

<br>

带有图标标记输入类型

<br>

<demo-block>
:::slot source
<input-icon></input-icon>
:::

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 `input` 组件首部和尾部增加显示图标，也可以通过 `slot` 来放置图标。

:::slot highlight
```html
<template>
    <div>
        <ac-input v-model="value" type="text" placeholder="请输入内容" prefix-icon="dizhi"></ac-input>
        <ac-input v-model="value" type="text" placeholder="请输入内容" suffix-icon="dizhi"></ac-input>
    </div>
</template>

<script>
  export default {
    name: 'icon',
    data() {
      return {
        value: ''
      }
    }
  }
</script>

```
:::
</demo-block>

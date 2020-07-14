# Button按钮
常用的操作按钮。
## 基础用法
<demo-block>
:::slot source
<button-base></button-base>
<button-icon></button-icon>
:::

基础的按钮用法。利用`type`来控制类型。利用`icon`来控制图标

:::slot highlight
```html
<ac-button>默认按钮</ac-button>
<ac-button type="success">成功按钮</ac-button>
<ac-button type="danger">危险按钮</ac-button>
<ac-button type="primary">主要按钮</ac-button>
<ac-button type="info">信息按钮</ac-button>

<ac-button type="primary" icon="add1"></ac-button>
<ac-button type="primary" icon="zuo"></ac-button>
<ac-button type="primary" icon="you"></ac-button>
<ac-button type="primary" icon="cuowu"></ac-button>
<ac-button type="primary" icon="xiala"></ac-button>
<ac-button type="primary" icon="dizhi"></ac-button>
```
:::
</demo-block>


## 带图标的
<demo-block>
:::slot source
<button-button-icon></button-button-icon>
:::

带图标的按钮可增强辨识度（有文字）。利用`iconPosition`来确定位置

:::slot highlight
```html
<ac-button type="success" icon="add1">成功按钮</ac-button>
<ac-button type="primary" icon="add1"></ac-button>
<ac-button type="primary" icon="add1" iconPosition="right">测试按钮</ac-button>
```
:::
</demo-block>

## 加载按钮
<demo-block>
:::slot source
<button-loading></button-loading>
:::

点击按钮后进行数据加载操作，在按钮上显示加载状态。加上`loading`属性

:::slot highlight
```html
<ac-button type="primary" loading>加载</ac-button>
<ac-button type="success" loading>加载</ac-button>
<ac-button type="info" loading>加载</ac-button>
<ac-button type="danger" loading>加载</ac-button>
<ac-button type="waring" loading>加载</ac-button>
<ac-button loading>加载</ac-button>
```
:::
</demo-block>

## 点击事件
<demo-block>
:::slot source
<button-click></button-click>
:::

点击按钮触发事件

:::slot highlight
```html
<ac-button type="success" @click="fn" :loading="loading">加载</ac-button>
```
:::
</demo-block>


## 按钮组
<demo-block>
:::slot source
<button-group></button-group>
:::

以按钮组的方式出现，常用于多项类似操作。

:::slot highlight
```html
 <ac-button-group>
    <ac-button type="primary" icon="zuo">上一页</ac-button>
    <ac-button type="primary" icon="you" icon-position="right">下一页</ac-button>
</ac-button-group>
```
:::
</demo-block>

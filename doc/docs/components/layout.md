# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。
## 基础布局
<br>

使用单一分栏创建基础的栅格布局。

<br>

<demo-block>
:::slot source
<layout-base></layout-base>
:::

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

:::slot highlight
```html
<template>
    <div>
        <ac-row class="el-row">
            <ac-col :span="24" class="el-col">
                <div class="grid-content bg-purple-dark"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row">
            <ac-col :span="12">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row">
            <ac-col :span="8">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
            <ac-col :span="8">
                <div class="grid-content bg-purple"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row">
            <ac-col :span="4">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
            <ac-col :span="4">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
            <ac-col :span="4">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
    </div>
</template>

<style lang="scss">
    .el-col {
        border-radius: 4px;
    }
    .el-row{
        margin-bottom: 10px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
```
:::
</demo-block>

## 分栏间隔
<br>

分栏之间存在间隔。

<br>

<demo-block>
:::slot source
<layout-gutter></layout-gutter>
:::

`Row` 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 `0`。

:::slot highlight
```html
<template>
    <div style="overflow: hidden">
            <ac-row :gutter="20">
                <ac-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </ac-col>
                <ac-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </ac-col>
                <ac-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </ac-col>
                <ac-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </ac-col>
            </ac-row>
        </div>
</template>
```
:::
</demo-block>

## 分栏偏移
<br>

支持偏移指定的栏数。

<br>

<demo-block>
:::slot source
<layout-offset></layout-offset>
:::

通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数。

:::slot highlight
```html
<template>
    <div style="overflow: hidden">
        <ac-row :gutter="20">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6" :offset="12">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row :gutter="20">
            <ac-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6" :offset="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
    </div>
</template>
```
:::
</demo-block>

## 对齐方式
<br>

通过 `flex` 布局来对分栏进行灵活的对齐。

<br>

<demo-block>
:::slot source
<layout-justify></layout-justify>
:::

可通过 `justify` 属性来指定 `start`, `center`, `end`, `space-between`, `space-around` 其中的值来定义子元素的排版方式。

:::slot highlight
```html
<template>
    <div>
        <ac-row class="el-row" justify="space-around">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row" justify="space-between">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row" justify="start">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row class="el-row" justify="end">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
    </div>
</template>
```
:::
</demo-block>

## 响应式布局
<br>

参照了 `Bootstrap` 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

<br>

<demo-block>
:::slot source
<layout-responsive></layout-responsive>
:::


:::slot highlight
```html
<template>
    <ac-row>
            <ac-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></ac-col>
            <ac-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></ac-col>
            <ac-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></ac-col>
            <ac-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></ac-col>
        </ac-row>
</template>
```
:::
</demo-block>



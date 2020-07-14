# Container 布局容器

<br>

用于布局的容器组件，方便快速搭建页面的基本结构：
`<ac-container>`：外层容器。当子元素中包含 `<ac-header>` 或 `<ac-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

<br>

`<ac-header>`：顶栏容器。

`<ac-aside>`：侧边栏容器。

`<ac-main>`：主要区域容器。

`<ac-footer>`：底栏容器。

<br>

::: tip

以上组件采用了 `flex` 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。

:::


## 常见页面布局

<demo-block>
:::slot source
<container-base></container-base>
:::


:::slot highlight
```html
<template>
    <div>
        <ac-container>
            <ac-header>Header</ac-header>
            <ac-main>Main</ac-main>
        </ac-container>

        <ac-container>
            <ac-header>Header</ac-header>
            <ac-main>Main</ac-main>
            <ac-footer>Footer</ac-footer>
        </ac-container>

        <ac-container>
            <ac-aside width="200px">Aside</ac-aside>
            <ac-main>Main</ac-main>
        </ac-container>

        <ac-container>
            <ac-header>Header</ac-header>
            <ac-container>
                <ac-aside width="200px">Aside</ac-aside>
                <ac-main>Main</ac-main>
            </ac-container>
        </ac-container>

        <ac-container>
            <ac-header>Header</ac-header>
            <ac-container>
                <ac-aside width="200px">Aside</ac-aside>
                <ac-container>
                    <ac-main>Main</ac-main>
                    <ac-footer>Footer</ac-footer>
                </ac-container>
            </ac-container>
        </ac-container>

        <ac-container>
            <ac-aside width="200px">Aside</ac-aside>
            <ac-container>
                <ac-header>Header</ac-header>
                <ac-main>Main</ac-main>
            </ac-container>
        </ac-container>

        <ac-container>
            <ac-aside width="200px">Aside</ac-aside>
            <ac-container>
                <ac-header>Header</ac-header>
                <ac-main>Main</ac-main>
                <ac-footer>Footer</ac-footer>
            </ac-container>
        </ac-container>
    </div>
</template>
<style lang="scss">
    .ac-header, .ac-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .ac-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .ac-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }


    .ac-container:nth-child(5) .ac-aside,
    .ac-container:nth-child(6) .ac-aside {
        line-height: 260px;
    }

    .ac-container:nth-child(7) .ac-aside {
        line-height: 320px;
    }

</style>
```
:::
</demo-block>

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

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

<template>
    <div class="btn">
        <ac-button>默认按钮</ac-button>
        <ac-button style="font-size: 13px" type="success">成功按钮</ac-button>
        <ac-button style="font-size: 13px" type="danger">危险按钮</ac-button>
        <ac-button style="font-size: 13px" type="primary">主要按钮</ac-button>
        <ac-button style="font-size: 13px" type="info">信息按钮</ac-button>
        <ac-button style="font-size: 13px" type="waring">警告按钮</ac-button>
    </div>
</template>

<script>
  export default {
    name: 'test'
  }
</script>

<style lang="scss">
.btn{
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
}
</style>

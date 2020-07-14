<template>
    <div class="btn">
        <ac-button-group>
            <ac-button type="primary" icon="zuo">上一页</ac-button>
            <ac-button type="primary" icon="you" icon-position="right">下一页</ac-button>
        </ac-button-group>
        <ac-button-group>
            <ac-button type="primary" icon="zuo"></ac-button>
            <ac-button type="primary" icon="dizhi"></ac-button>
            <ac-button type="primary" icon="you"></ac-button>
        </ac-button-group>
    </div>
</template>

<script>
  export default {
    name: 'group'
  }
</script>
<style lang="scss" scoped>
    .btn{
        justify-content:space-around;
    }
</style>

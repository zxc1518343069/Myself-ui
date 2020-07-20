<template>
  <div>
    <h1>click触发</h1>
    <div>
      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="click"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="bottom"
      >
        123456789
        <ac-button slot="reference" type="primary">激活</ac-button>
      </ac-popover>
      <br>
      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="click"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="top"
      >
        123456789
        <ac-button slot="reference" type="primary">hover 激活</ac-button>
      </ac-popover>
      <br>

      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="click"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="right"
      >
        长度测试
        <ac-button slot="reference" type="primary">长度测试</ac-button>
      </ac-popover>
      <br>
      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="click"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="left"
      >
        长度测试
        <ac-button slot="reference" type="primary">长度测试</ac-button>
      </ac-popover>
    </div>
    <h1>hover触发</h1>
    <div>
      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="hover"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="bottom"
      >
        123456789
        <ac-button slot="reference" type="primary">激活</ac-button>
      </ac-popover>
      <br>
      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="hover"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="top"
      >
        123456789
        <ac-button slot="reference" type="primary">hover 激活</ac-button>
      </ac-popover>
      <br>

      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="hover"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="right"
      >
        123456789
        <ac-button slot="reference" type="primary">长度测试123456789</ac-button>
      </ac-popover>
      <br>
      <ac-popover :value="value"
                  width="200px"
                  title="标题"
                  trigger="hover"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  placement="left"
      >
        123456789
        <ac-button slot="reference" type="primary">长度测试123456789</ac-button>
      </ac-popover>
    </div>
  </div>



</template>

<script>
  export default {
    name: 'PopoverTest',
    data(){
      return {
        value:false
      }
    }
  }
</script>

<style>

</style>

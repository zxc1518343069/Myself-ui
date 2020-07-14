<template>
  <div>
    <h1>正常</h1>
    <ac-row>
      <ac-col :span="12">
        <div class="bg-purple">123</div>
      </ac-col>
      <ac-col :span="12">
        <div class="bg-purple-light">123</div>
      </ac-col>
    </ac-row>
    <ac-row>
      <ac-col :span="24">
        <div class="bg-purple-dark">456</div>
      </ac-col>
    </ac-row>
    <h1>偏移</h1>
    <ac-row>
      <ac-col :span="6">
        <div class="bg-purple">123</div>
      </ac-col>
      <ac-col :span="6" :offset="12">
        <div class="bg-purple-light">123</div>
      </ac-col>
    </ac-row>
    <h1>分栏间隔</h1>
    <div style="overflow: hidden">
      <ac-row :gutter="20">
        <ac-col :span="6">
          <div class="bg-purple">123</div>
        </ac-col>
        <ac-col :span="6">
          <div class="bg-purple-light">123</div>
        </ac-col>
        <ac-col :span="6">
          <div class="bg-purple">123</div>
        </ac-col>
        <ac-col :span="6">
          <div class="bg-purple-light">123</div>
        </ac-col>
      </ac-row>
    </div>
    <h1>超出24 自动换行</h1>
    <ac-row>
      <ac-col :span="12">
        <div class="bg-purple">123</div>
      </ac-col>
      <ac-col :span="12">
        <div class="bg-purple-light">123</div>
      </ac-col>
      <ac-col :span="6">
        <div class="bg-purple">123</div>
      </ac-col>
    </ac-row>
    <h1>flex</h1>
    <ac-row justify="space-around">
      <ac-col :span="6">
        <div class="bg-purple">123</div>
      </ac-col>
      <ac-col :span="6">
        <div class="bg-purple-light">123</div>
      </ac-col>
    </ac-row>
    <h1>响应式布局</h1>
    <ac-row>
      <ac-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></ac-col>
      <ac-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></ac-col>
      <ac-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></ac-col>
      <ac-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></ac-col>
    </ac-row>
  </div>
</template>

<script>
  export default {
    name: 'LayoutTest'
  }
</script>

<style lang="scss">
.el-col {
  border-radius: 4px;
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

<template>
    <div style="overflow: hidden">
        <ac-row :gutter="20" class="el-row">
            <ac-col :span="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6" :offset="12">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
        <ac-row :gutter="20" class="el-row">
            <ac-col :span="6" :offset="6">
                <div class="grid-content bg-purple"></div>
            </ac-col>
            <ac-col :span="6" :offset="6">
                <div class="grid-content bg-purple-light"></div>
            </ac-col>
        </ac-row>
    </div>
</template>

<script>
  export default {
    name: 'offset'
  }
</script>

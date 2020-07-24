<template>
    <div>
<!--      .sync 自组件改数据后  父组件同步-->
      <ac-pagination
        :total="10"
        :current-page.sync="currentPage"
        :page-count="7"
      >
      </ac-pagination>
    </div>
</template>

<script>
  export default {
    name: 'paginationTest',
    data(){
      return {
        currentPage:3
      }
    }
  }
</script>

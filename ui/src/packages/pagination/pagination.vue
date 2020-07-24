<template>
  <ul class="ac-pagination">
    <li>
      <ac-icon icon="zuo" @click="select(currentPage - 1)" :class="{noAllow: currentPage === 1 }"></ac-icon>
    </li>
    <li><span :class="{active:currentPage === 1}" @click="select(1)">1</span></li>
    <li v-if="showPrev"><span>...</span></li>
    <li v-for="p in pagers" :key="p">
      <span :class="{active:currentPage === p}" @click="select(p)">
        {{p}}
      </span>
    </li>
    <li v-if="showNext"><span>...</span></li>
    <li><span :class="{active:currentPage === total}" @click="select(total)">{{ total }}</span></li>
    <li>
      <ac-icon icon="you" @click="select(currentPage + 1)" :class="{noAllow:currentPage===total}"></ac-icon>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ac-pagination',
    data() {
      return {
        showPrev: false,
        showNext: false
      }
    },
    methods:{
      select(current){
        if (current  <1){
          current = 1
        }else if (current > this.total){
          current = this.total
        }else if (current !== this.currentPage){
          this.$emit('update:current-page',current)
        }
      }
    },
    props: {
      total: {
        type: Number,
        default: 1
      },
      pageCount: {
        type: Number,
        default: 7
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    computed: {
      // 最多显示 7个
      // 1 2 3 4 5 6 ...10
      // 1  .。  3 4 5 6 7 .。。 10
      pagers() {
        // floor向下取整  ceil 向上取整
        let middlePage = Math.ceil(this.pageCount / 2)
        let showPrev = false
        let showNext = false
        if (this.total > this.pageCount) {
          if (this.currentPage > middlePage) {
            showPrev = true
          }
          if (this.currentPage < this.total - middlePage + 1) {
            showNext = true
          }
        }
        let arr = []
        if (showPrev && !showNext) {
          // 前面存在。。。
          let start = this.total - (this.pageCount - 2)
          for (let i = start; i < this.total; i++) {
            arr.push(i)
          }
        } else if (showNext && showPrev) {
          let count = Math.floor((this.pageCount - 2) / 2)
          for (let i = this.currentPage - count; i <= this.currentPage + count; i++) {
            arr.push(i)
          }
        } else if (!showPrev && showNext) {
          //  后面存在...
          for (let i = 2; i < this.pageCount; i++) {
            arr.push(i)
          }
        } else {
          for (let i = 2; i < this.total; i++) {
            arr.push(i)
          }
        }
        this.showPrev = showPrev
        this.showNext = showNext
        return arr
      }
    }
  }
</script>

<style lang="scss">
  .ac-pagination {
    li {
      user-select: none;
      list-style: none;
      display: inline-flex;
      vertical-align: middle;
      min-width: 35.5px;
      padding: 0 4px;
      background: #fff;
      .active {
        color: #3a8ee6;
      }
    }

    .noAllow{
      cursor: not-allowed;
    }
  }
</style>

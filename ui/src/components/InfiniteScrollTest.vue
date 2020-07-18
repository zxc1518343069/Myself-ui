<template>
  <div>
    <div style="overflow: auto" class="ac-infinite-list">
      <ul
        infinite-scroll-disabled="disabled"
        infinite-scroll-delay="delay"
        infinite-scroll-distance="distance"
        infinite-scroll-immediate="immediate"
        v-infinite-scroll="load"
      >
        <li v-for="i in count" :key="i" class="ac-infinite-list-item"> {{ i }}</li>
      </ul>
    </div>
    <br>
    <ul style="overflow: auto"
        class="ac-infinite-list"
        infinite-scroll-disabled="disable"
        infinite-scroll-delay="delay"
        infinite-scroll-distance="distance"
        infinite-scroll-immediate="immediate"
        v-infinite-scroll="load2"
    >
      <li v-for="i in count2" :key="i" class="ac-infinite-list-item"> {{ i }}</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'InfiniteScrollTest',
    data() {
      return {
        count: 0,
        count2:0,
        disabled: false,
        delay: 200,
        distance: 30,
        immediate: true
      }
    },
    computed:{
      noMore () {
        return this.count2 >= 20
      },
      disable () {
        return  this.noMore
      }
    },
    methods: {
      load() {
        this.count += 2
      },
      load2() {
        this.count2 += 2
      }
    }
  }
</script>

<style lang="scss">
  .ac-infinite-list {
    width: 100%;
    height: 300px;
    border: 1px solid #3a8ee6;
    .ac-infinite-list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #e8f3fe;
      margin: 10px;
      color: #7dbcfc;
    }
  }
</style>

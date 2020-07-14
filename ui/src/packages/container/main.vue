<template>
<main class="ac-main">
<slot></slot>
</main>
</template>

<script>
  export default {
    name: 'ac-main'
  }
</script>

<style lang="scss">
.ac-main{
  flex: 1;
  padding: 20px;
}
</style>

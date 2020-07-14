<template>
  <div id="app">
<!--    <ButtonTest></ButtonTest>-->
<!--    <LayoutTest></LayoutTest>-->
<!--    <ContainerTest></ContainerTest>-->
    <FormTest></FormTest>
  </div>
</template>

<script>
import ButtonTest from './components/ButtonTest';
import LayoutTest from './components/LayoutTest';
import ContainerTest from './components/ContainerTest';
import FormTest from './components/FormTest';
  export default {
    name: 'App',
    components: {
      ButtonTest,
      LayoutTest,
      ContainerTest,
      FormTest
    }
  }
</script>

<style lang="scss">

</style>

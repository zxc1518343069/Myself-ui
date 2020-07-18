<template>
  <div id="app">
    <!--    <ButtonTest></ButtonTest>-->
    <!--    <LayoutTest></LayoutTest>-->
    <!--    <ContainerTest></ContainerTest>-->
    <!--    <FormTest></FormTest>-->
<!--    <DatePickTest></DatePickTest>-->
<!--    <SwitchTest></SwitchTest>-->
    <InfiniteScrollTest></InfiniteScrollTest>


  </div>
</template>

<script>
  import ButtonTest from './components/ButtonTest';
  import LayoutTest from './components/LayoutTest';
  import ContainerTest from './components/ContainerTest';
  import FormTest from './components/FormTest';
  import DatePickTest from './components/DatePickTest';
  import SwitchTest from './components/SwitchTest';
  import InfiniteScrollTest from './components/InfiniteScrollTest';

  export default {
    name: 'App',
    components: {
      ButtonTest,
      LayoutTest,
      ContainerTest,
      FormTest, DatePickTest,SwitchTest,InfiniteScrollTest
    }
  }
</script>

<style lang="scss">

</style>

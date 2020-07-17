<template>
  <div id="app">
    <!--    <ButtonTest></ButtonTest>-->
    <!--    <LayoutTest></LayoutTest>-->
    <!--    <ContainerTest></ContainerTest>-->
    <!--    <FormTest></FormTest>-->
    <DatePickTest></DatePickTest>
  </div>
</template>

<script>
  import ButtonTest from './components/ButtonTest';
  import LayoutTest from './components/LayoutTest';
  import ContainerTest from './components/ContainerTest';
  import FormTest from './components/FormTest';
  import DatePickTest from './components/DatePickTest';

  export default {
    name: 'App',
    components: {
      ButtonTest,
      LayoutTest,
      ContainerTest,
      FormTest, DatePickTest
    }
  }
</script>

<style lang="scss">

</style>

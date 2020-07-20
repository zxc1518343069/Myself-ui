<template>
  <div id="app">
    <br>
    <br>
    <br>
    <br>
    <br>

    <!--    <ButtonTest></ButtonTest>-->
    <!--    <LayoutTest></LayoutTest>-->
    <!--    <ContainerTest></ContainerTest>-->
    <!--    <FormTest></FormTest>-->
    <!--    <DatePickTest></DatePickTest>-->
    <!--    <SwitchTest></SwitchTest>-->
    <!--    <InfiniteScrollTest></InfiniteScrollTest>-->
    <!--    <MessageTest></MessageTest>-->
    <PopoverTest></PopoverTest>
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
  import MessageTest from './components/MessageTest';
  import PopoverTest from './components/PopoverTest';

  export default {
    name: 'App',
    components: {
      ButtonTest,
      LayoutTest,
      ContainerTest,
      FormTest,
      DatePickTest,
      SwitchTest,
      InfiniteScrollTest,
      MessageTest,
      PopoverTest
    }
  }
</script>

<style lang="scss">

</style>

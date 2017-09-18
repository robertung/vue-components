<template>
  <div id="app">
    <my-component></my-component>
    <!-- NOTE ^ Mark Up for Components, must be the same name of the component -->
    <info-card></info-card>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'
// NOTE: ^ Import Component Object from file.
import InfoCard from './components/InfoCard'
export default {
  name: 'app',
  components: {
      MyComponent,
      InfoCard
  }
  // NOTE ^ Register Component Object and define component
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin:10px;
}
</style>

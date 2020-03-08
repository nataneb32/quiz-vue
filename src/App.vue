<template>
  <div id="app">
    <Question/>
  </div>
</template>

<script>
import Question from './components/Question'
export default {
  name: 'App',
  components:{
    Question
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>

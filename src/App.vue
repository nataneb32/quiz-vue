<template>
  <div id="app">

    <Question v-if="finish"/>
    <Result v-else/>
  </div>
</template>

<script>
import Question from './components/Question'
import Result from './components/Result'
export default {
  name: 'App',
  computed:{
    finish(){
      return !this.$store.state.finish
    }
  },
  components:{
    Question,
    Result
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

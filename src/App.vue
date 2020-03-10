<template>
  <div id="app">
    <SideBar/>
    <Question v-if="hasQuestion"/>
    <Result v-else/>
  </div>
</template>

<script>
import Question from './components/Question'
import Result from './components/Result'
import SideBar from './components/SideBar'

export default {
  name: 'App',
  computed:{
    hasQuestion(){
      return this.$store.state.stage < (this.$store.state.questions.length)
    }
  },
  components:{
    Question,
    Result,
    SideBar
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
  grid-template-areas: ". .";
  grid-template-columns: 300px auto;
}
</style>

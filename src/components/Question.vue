<template>
  <div class="questions" id="root">
    <h1 class="title">{{question.title}}</h1>
    <button class="undo" @click="undo"><font-awesome-icon icon="arrow-left" color="#2c3e50"/></button>
    <div class="painel">
        <div class="option" v-for="(option,index) in question.options" @click="nextStage(option.answer)" :key="`option-${index}`">
            <Option :option="option"/>
        </div>
    </div>
  </div>
</template>

<script>
import Option from './Option'
export default {
    name: "Question",
    computed:{
        question(){
            console.log(this.$store.state.history)
            return this.$store.state.questions[this.$store.state.stage]
        }
    },
    methods: {
        nextStage(answer){
            this.$store.dispatch('nextStage',answer)
        },
        undo(){
            this.$store.commit('undoCommand')
        }
    },
    components:{
        Option
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Source Sans Pro';
}
.undo{
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    border-radius: 50%;
}
.undo:before{
    content: "";

    display: block;
    text-align: center;
    position: absolute;
    top:-10px;
    bottom: -10px;
    left:-10px;
    right: -10px;
    padding: 15px;
    border: 3px solid #2c3e50;
    border-radius: 50%;
    z-index: -3;
}
button{
    grid-area: button;
}
.option {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    overflow: hidden;

}
.painel{
    max-width: 800px;
    align-self: center;
    display: grid;
    grid-template-areas: ". . ."
    ". . ."
    "_ _ button";
    grid-gap: 10px;
    justify-self: center;
    
}
#root {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
</style>
<template>
  <div id="root">
    <h1>{{question.title}}</h1>
    <button class="undo" @click="undo">    <font-awesome-icon icon="arrow-left" color="#2c3e50"/></button>
    <div class="painel">
        <div class="option" v-for="(option,index) in question.options" :key="`option-${index}`">
            <img :src="option.img" @click="nextStage(index)" alt="">
        </div>
    </div>
  </div>
</template>

<script>
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
    }
}
</script>

<style scoped>

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
.option img{
    transition: transform .5s ease;
    width: 100%;
}
.option img:hover{
    transform: scale(1.5);
}
.option {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    overflow: hidden;
    border: 3px solid #cacaca;
    border-radius: 4px;
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
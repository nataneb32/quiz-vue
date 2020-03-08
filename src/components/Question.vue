<template>
  <div id="root">
    <h1>{{question.title}}</h1>
    <button @click="undo">Undo</button>
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
    data(){
        return{
            title: "Titulo da pergunta?",
            options:[
                {img: "https://via.placeholder.com/300x200"},
                {img: "https://via.placeholder.com/300x200"},
                {img: "https://via.placeholder.com/300x200"},
                {img: "https://via.placeholder.com/300x200"}
            ]
        }
    },
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
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
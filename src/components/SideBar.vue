<template>
  <div id="root">
      <div :class="'stage '+ isActive(index)" v-for="(stage,index) in stages" :key="index">
          {{index}}
            <div class="title">{{stage.title}}</div>
      </div>
      <div :class="'stage '+ isFinish() " >
          <font-awesome-icon icon="flag-checkered"/>
      </div>
  </div>
</template>

<script>
export default {
    name: "SideBar",
    computed:{
        stages(){
            let stages = this.$store.state.questions
            return stages
        }

    },
    methods:{
        isFinish(){
            if(this.$store.state.stage >= this.$store.state.questions.length ){
                return ' finish'
            }else{
                return ''
            }
        },
        isActive(index){
            if(this.$store.state.stage > index){
                return " is-active"
            }else{
                return ""
            }
        }
    }
}
</script>

<style scoped>

    @media only screen and (max-width: 800px)  {
        #root{
            display:  none!important;
        }
    }
    #root{
        display: grid;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        grid-gap: 10px;
    }
    .stage{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;
        width: 100px;
        font-family: 'Baloo Chettan 2';
    }
    .stage:before{
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        background: white;
        border: 3px solid #a3a3a3;
        border-radius: 50%;
        z-index: -1;
    }

    .stage:after{
        content: "";
        position: absolute;
        background: #55b776;
        height: 0%;
        transition: height 1s ease-out;
        width: 3px;
        align-self: center;
        top: 50%;
        z-index: -2;
        /*animation-name: nextStep;*/
    }
    .stage.is-active:after{
        height: 100% !important;
    }
    .stage.is-active::before{
        border: 3px solid #55b776;
    }
    .stage.finish::before{
        border: 3px solid #55b776;
    }
    .stage .title{
        position: absolute;
        left: 100%;
        width: 200px;
    }

</style>
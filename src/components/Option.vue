<template>
  <img v-if="option.type == 'img'" :src="option.img" v-on:click="nextStage(option.mutation)"/>
  <div v-else-if="option.type == 'color'" id="root">
      <div class="color-pallet">
            <div  v-bind:style="{background: colors[0]}"></div>
            <div  v-bind:style="{background: colors[1]}"></div>
            <div  v-bind:style="{background: colors[2]}"></div>
            <div  v-bind:style="{background: colors[3]}"></div>
      </div>
  </div>
  <div v-else>Esse tipo de opção não existe</div>
</template>

<script>


function increase_brightness(hex, percent){
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

export default {
    name: "Option",
    props: ['option',],
    methods: {
    nextStage(answer){
        this.$store.dispatch('nextStage',answer)
    },
    undo(){
        this.$store.commit('undoCommand')
    },
    },
    data:()=>{
        function randomColor(){
            return "#"+((1<<24)*Math.random()|0).toString(16)
        } 
        let color = randomColor();
        return {
            colors:[color,increase_brightness(color,50),increase_brightness(color,75),increase_brightness(color,85),increase_brightness(color,90)]
        }
    }
}
</script>

<style>
#root{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
}
.color-pallet{
    transition: transform .5s ease;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
}
.color-pallet div{
    flex: 1;
}
 .color-pallet:hover{
    transform: scale(1.2);
}
 img{
    transition: transform .5s ease;
    width: 100%;
    border: 3px solid #cacaca;
    border-radius: 4px;
}
 img:hover{
    transform: scale(1.5);
}
</style>
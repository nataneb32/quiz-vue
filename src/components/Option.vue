<template>
  <img v-if="option.type == 'img'" class="img" :src="option.img" v-on:click="click"/>
  <div v-else-if="option.type == 'color'" class="color" id="root">
      <div class="color-pallet">
            <div  v-bind:style="{background: colors[0]}"></div>
            <div  v-bind:style="{background: colors[1]}"></div>
            <div  v-bind:style="{background: colors[2]}"></div>
            <div  v-bind:style="{background: colors[3]}"></div>
      </div>
        <button v-show="this.option.random" class="icon" @click="generateColors" ><font-awesome-icon icon="redo"/></button>
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
function randomColor(){

    return "#"+((1<<24)*((Math.random() * 0.5) + 0.5)|0).toString(16)
} 

export default {
    name: "Option",
    props: ['option',],
    mounted(){
        
        if(this.option.type == 'color') if(this.option.random){
            this.generateColors()
        }else{
            this.colors = this.option.colors
        }
    },
    methods: {
        generateColors(){
            this.colors = [randomColor()]
            this.colors[1] = increase_brightness(this.$data.colors[0],50)
            this.colors[2] = increase_brightness(this.$data.colors[0],75)
            this.colors[3] = increase_brightness(this.$data.colors[0],90)
            this.text = "asdasd"
        },
        click(){
            this.$emit('click',this.option)
        }
    },
    data:()=>{
        return {
            colors:[],
            text: ""
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
.icon{
    position: absolute;
    top:10px;
    left:10px;
    background: none;
    border: none;
    padding: 4px;
}
</style>
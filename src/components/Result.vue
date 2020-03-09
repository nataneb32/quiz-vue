<template>
    <div>
    <div>Finish</div>
    <div v-for="(answer,index) in answers" :key="index"> 
        {{answer}}
    </div>
    </div>
</template>

<script>
export default {
    name: "Result",
    computed: {
        answers(){
            return this.$store.state.answers
        }
    }
}
</script>

<style>

</style>
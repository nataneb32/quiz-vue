<template>
    <div class="result" id="root">
        <div class="center">
            <div>Esse é o seu resultado</div>
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

<style scoped>
    #root{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .center{

    }
</style>
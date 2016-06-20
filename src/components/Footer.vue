<template>
    <header-component/>
    <div>this is template body</div>
    <other-component/>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import Header from './components/header.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            Header,
        }
    }
</script>

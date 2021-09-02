<template>
    <button @click="click">
        Click 13 ButtonVue {{count}} times
    </button>

</template>

<script>
    export default{
        name: 'ButtonVue',
        
        data(){
            return{
                count: 0,
            };
        },

        methods: {
            click(){
                this.count++;
            },
        },
    }

</script>


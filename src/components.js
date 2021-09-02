import Vue from 'vue';

Vue.component(`ButtonString`,{
    template: `<button @click="click"> Click 9 ButtonString {{count}} times </button>`,

    data(){
        return{
            count: 0,
        };
    },
    
    methods: {
        click() {
            this.count++;
       },      
    },
})

Vue.component('ButtonTemplateString',{
    template: '<button @click="click"> Click 10 ButtonTemplateString {{count}} times </button>',

    data(){
        return{
            count: 0,
        };
    },
    
    methods: {
        click() {
            this.count++;
        },      
    },
})      

Vue.component('ButtonXTemplate',{   
    template: '#button-x-template',
    
    data(){
        return{
            count: 0,
        };
    },

    methods: {
        click() {
            this.count++;
        },      
    },
})


Vue.component('ButtonInline',{

    data(){
        return{
            count: 0,
        };
    },
    
    methods: {
        click() {
            this.count++;
        },      
    },
})


Vue.component('ButtonRender',{
    
    data(){
        return{
            count: 0,
        };
    },
    
    methods: {
        click() {
            this.count++;
        },      
    },
    
    render(createElement){
    
        return createElement(
            'button',
            {
                on:{
                   click: this.click
                }
            },
            [
                //<button> Click 11 ButtonRender {this.count} times </button>
                `Click 11 ButtonRender ${this.count} times`
            ]
        );
    }
})

Vue.component('ButtonJSX',{

    data(){
        return{
            count: 0,
        };
    },
    methods: {
        click() {
            this.count++;
        },      
    },

    render(){
        return (
            <button onClick={this.click}> Click 12 ButtonJSX {this.count} times </button>
        )
    }
})
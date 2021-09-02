<template>

<div id="app">
<input  type = "text" v-model="text" >
<span> Text: {{ text }} </span>
<span> Api: {{ apiResponse }} </span>


<button @click="fullName = 'Alvo Dumbledore'"> Click </button> 
<span>{{ fullName }}</span>

<button @click="increment1"> Click </button> 
{{a}}
<button @click="increment2(2)"> Click </button> 
{{b}}
<button @click="increment3(2, $event)">PointEvent</button> 

<button @click="count.x++"> Click X {{count}} </button> 
<button @click="count.b++"> Click B {{count}} </button> 

<p></p>

<ButtonRender> Click 1  </ButtonRender>

<ButtonJSX> Click 2 </ButtonJSX>

<ButtonVue> Click 4 </ButtonVue> 

<p></p>

<ButtonInline inline-template> <button @click="click"> Click 3 ButtonInline {{count}} times </button>
</ButtonInline>

<ButtonString inline-template>
<button 
@click="click"> Click 5 ButtonString {{count}} times 
</button> 
</ButtonString> 


<ButtonTemplateString inline-template> 
<button 
@click="click"> Click 6 ButtonTemplateString {{count}} times 
</button> 
</ButtonTemplateString>

<ButtonXTemplate inline-template> 
<button 
@click="click"> Click 7 ButtonXTemplate {{count}} times 
</button>
</ButtonXTemplate>

</div>
  
</template>

<script>

import ButtonVue from './ButtonVue.vue';

export default{

  name:'App',
  
  data(){

    return{ 
      text: '',
      apiResponse:'Start',

      a: 0,   
      b: 0, 
      firstName: 'Harry',
      lastName: 'Potter',
    
      count: {
      x:0,
      }   
    }
  },

  components:{
      ButtonVue,
  },

  computed:{

    //fullNameComputed() {
      //return Math.random();
      //return `${this.firstName} ${this.lastName}`;
    //},

    fullName:{
      get(){
        return `${this.firstName} ${this.lastName}`;
      },
      set(value){
        const [first, last] = value.split(' ');
        this.firstName = first;
        this.lastName = last;
      }
    }
  },

  methods: {
  
    //fullName() {
      //return Math.random();
      // return `${this.firstName} ${this.lastName}`;
    //},

    //click() {
     // this.count++;
    //},

    increment1(){
      this.a++;
    },   

    increment2(value){
      this.b += value;
    },  

    increment3(value, event){
      console.log(event)
    },   
    
    simulateApi(response){

      return new Promise((res) => {
        setTimeout(() => {
          this.apiResponse = response;
          }, 1000);
        });
      }, 
      async fetchApi(value){
        await this.simulateApi(value);
      }
    },

    watch: {
      text(newValue, oldValue){
        if(newValue.length > 7){
          this.fetchApi(Math.random());
        }
    },

  
    /* mounted() {
      //console.log(this);
      //console.log(this.count);
      // this.count = 2;
      // console.log(this.count);
      this.y = 0;
      this.$set(this.count, 'y', 1)
      this.count = {...this.count, ...{a:5,b:7}}
      },*/
  }
  
}

</script>

<style>

  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

</style>


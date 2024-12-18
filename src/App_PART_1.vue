<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div style="display: block;">

    <!-- Basic VueJS directives -->
    <button v-bind:disabled="isDisabled">Bind</button>
    <h1 v-bind:class="isPromoted ? 'promoted':'not-promoted'">Promoted Movie</h1>
    <h1 v-bind:class="isSoldOut ? 'sold-out': 'new'">Soldout? movie</h1>
    <h1 v-bind:class="isMcdo ? 'mcdoStyled' : 'noStyle'">McdoStyled</h1>
    <div v-bind:style="[headerStyleObject]">Color Orange</div>
    <div v-bind:style="[baseStyleObject, successStyleObject]">Success Style</div>
    <div v-bind:style="[dangerStyleObject]">DANGER STYLE</div>

    <!-- If/else statements -->
    <h1 v-if="num === 0">The number is zero</h1>
    <h1 v-else-if="num > 0">The number is positive</h1>
    <h1 v-else-if="num < 0">The number is negative</h1>
    <h1 v-else>The number is not zero</h1>

    <!-- v-show and v-if -->
    <h1 v-show="showElement">Using vshow</h1>
    <h1 v-if="showElement">Using vif</h1>

    <!-- For loop in vue -->
    <h1 v-for="(name,index) in names" :key="name">{{index}}{{name}}</h1>


    <div v-for="actor in actors" :key="actor.name">
      <h2>{{actor.name}}</h2>
      <h3 v-for="movie in actor.movies" :key="movie">{{movie}}</h3>
    </div>

    <h1 v-for="(value,key,index) in myInfo" :key="value">{{index}} {{key}} {{value}}</h1>

    <!-- Classic for loop -->
    <template v-for="n in names" :key="n">
      <h3>{{n}}</h3>
      <hr>
    </template>

    <template v-for="r in randomElements" :key="r">
      <h3>{{r}}</h3>
      <hr>
    </template>

    <!-- Showing key-value pairs -->
    <template v-for="name in fullNames" :key="name">
      {{name.first}} {{name.last}} 
      <hr>
    </template>

    <!-- For loop with input field -->
    <template v-for="name in names">
      <h3>{{name}}</h3>
      <input placeholder="Last name">
    </template>

    <!-- Show only if name is equals diana -->
    <template v-for="name in namesTwo" :key="name">
      <h1 v-if="name === 'Diana'">{{name}}</h1>
    </template>

    <!-- Perform math operations -->
    <h1>Add Method One - {{add(2,3,20)}}</h1>
    <h1>Add Method Two- {{add(10,15,70)}}</h1>

    <!-- Change name on click/change name on hover -->
    <h1>{{name}}</h1>
    <button v-on:click="name='Batman'">Change Name</button>
    <button v-on:click="changeName($event), increment(1, $event)">Change Name (onClick function)</button>
    <button v-on:mouseover="name='Batman'">Change Name</button>

    <!-- Show count -->
    <h1>{{count}}</h1>

    <!-- Increment/Decrement -->
    <button v-on:click="increment(1)">Increment(1)</button>
    <button v-on:click="increment(5)">Increment(5)</button>
    <button v-on:click="decrement(1)">Decrement(1)</button>
    <button v-on:click="decrement(5)">Decrement(5)</button>

    <div>
      <pre>
        {{ JSON.stringify(formValues, null, 2)}}
      </pre>
    </div>

    <form @submit="submitForm">
      <!-- Basic text input field -->
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim.lazy="formValues.name">
      </div>
      <div>
        <label for="name">Profile Summary</label>
        <input type="text" id="name" v-model.trim.lazy="formValues.profileSummary">
      </div>

      <!-- Select Tags -->
      <div>
        <label for="country">Country</label>
        <select id="country" v-model="formValues.country">
          <option value="">Select a Country</option>            
          <option value="india">India</option>            
          <option value="vietnam">Vietnam</option>            
          <option value="singapore">Singapore</option>            
        </select>
      </div>

      <!-- MultiSelect Tags -->
      <div>
        <label for="job-location">Job Location</label>
        <select id="country" multiple v-model="formValues.jobLocation">
          <option value="">Select a Country</option>            
          <option value="india">India</option>            
          <option value="vietnam">Vietnam</option>            
          <option value="singapore">Singapore</option>            
        </select>
      </div>

      <!-- Checkboxes -->
      <div>
        <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no">
        <label for="remoteWork">Open to remote work?</label>
      </div>

      <!-- Checkbox for skillset -->
      <div>
        <label for="skillset">Skillset</label>
        <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
        <label for="html">HTML</label>
        <input type="checkbox" id="html" value="css" v-model="formValues.skillSet">
        <label for="html">CSS</label>
        <input type="checkbox" id="html" value="javascript" v-model="formValues.skillSet">
        <label for="javascript">JavaScript</label>
      </div>

      <div>
        <label>Years of Experience</label>
        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience">
        <label for="0-2">0-2</label>
        <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience">
        <label for="3-5">3-5</label>
        <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience">
        <label for="6-10">6-10</label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  // export default {
  //   name: "App",
  //   data() {
  //     return {
  //       name: "Ivan",
  //       channel: "<strong>Just check if it's working!</strong>",
  //       hack: `<a href="" onclick="alert('You have been hacked!')">Click me!</a>`, 
  //       isDisabled: true,
  //       isPromoted: false,
  //       isSoldOut: true,
  //       isMcdo: false,
  //       headerSize:50,
  //       headerStyleObject: {
  //         color: 'orange',
  //         fontSize: '50px',
  //         padding: '20px'
  //       },
  //       baseStyleObject: {
  //         fontSize: '50px',
  //         padding: '20px'
  //       },
  //       successStyleObject: {
  //         color: 'green',
  //         backgroundColor: 'lightgreen',
  //         border: '1px solid green'
  //       },
  //       dangerStyleObject: {
  //         fontSize: '50px',
  //         color: 'darkred',
  //         backgroundColor: 'red',
  //         border: '1px solid darkred'
  //       }
  //     };
  //   },
  // };

  // export default {
  //   name: "App",
  //   data() {
  //     return {
  //       name:"Vishwas",
  //       count:0,
  //       baseMultiplier: 5,
  //       baseValue: 12,
  //       num: 12,
  //       showElement: true,
  //       names: ["Ivan","Duane","Dequito"],
  //       randomElements: ["el1","el2","el3"],
  //       namesTwo: ["Bruce", "Clark", "Diana"],
  //       fullNames: [
  //         {first: "Ivan", last:"Navi"},
  //         {first: "Duane", last:"Auden"},
  //         {first: "Dequito", last:"Duaney"},
  //       ],
  //       actors: [
  //         {
  //           name: "Christian Bale",
  //           movies: ['Batman', 'The Prestige']
  //         },
  //         {
  //           name: "Di Caprio",
  //           movies: ['Titanic', 'Inception']
  //         },
  //       ],
  //       myInfo: {
  //         name: "Vishwas",
  //         channel: "Codevolution",
  //         course: "Vue 3"
  //       },
  //       formValues: {
  //         name: '',
  //         profileSummary: '',
  //         country: ''
  //       }
  //     }
  //   },
  //   methods: {
  //     changeName(){
  //       this.name = 'Batman'
  //     },

  //     add(a,b,c) {
  //       return a + b + c
  //     },
  //     multiply (num) {
  //       return num * this.baseMultiplier
  //     },
  //     increment(num) {
  //       this.count += num
  //     },
  //     decrement(num){
  //       this.count -= num
  //     }
  //   },
  // }

  export default {
    name: "App",
    data() {
      return {
        formValues: {
          name: '',
          profileSummary: '',
          country: '',
          jobLocation: [],
          remoteWork: "no",
          skillSet: [],
          yearsOfExperience: '',
        }
      }
    },
    methods: {
      submitForm(event) {
        event.preventDefault()
        console.log("FORM VALUES", this.formValues)
      },
      changeName(){
        this.name = 'Batman'
      },

      add(a,b,c) {
        return a + b + c
      },
      increment(num) {
        this.count += num
      },
      decrement(num){
        this.count -= num
      }
    },
  }
</script>

<style scoped>
div {
  padding: 10px;
}
.mcdoStyled {
  background-color: yellow;
  color: red;
}
.underline {
  text-decoration: underline;
}  

.promoted {
  font-style: "Italic";
}

.not-promoted {
  color: teal;
}

.new {
  color: green;
}

.sold-out {
  color: red;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

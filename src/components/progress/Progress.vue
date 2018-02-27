<template>
  <div class="container">
    <h1 class="mb-4">Progress Indicators</h1>
    <div class="alert alert-info"><h4 class="mb-0">Data comes from a Firebase Database.</h4><br>
    You can make changes in the text fields below and they are immediately reflected in the database without needing to reload the page or submit a form.</div>
    <div class="livedata">
      <div class="client position-relative" v-for="client in clients" v-bind:key="client['.key']"
      :data-name="client.text"
      :data-percent="client.percentage">
        <svg viewBox="-10 -10 220 220">
          <path
          d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"></path>
        </svg>
        <svg viewBox="-10 -10 220 220">
          <path
          d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
          :stroke-dashoffset="client.percentage * 6.3"></path>
        </svg>

        <input class="editable"
        v-model="client.percentage"
        @input="updateTodoText(client, $event.target.value)" />
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase/get-content'

var dbContent = db.ref('livedata')

export default {
  data () {
    return {
      clients: []
    }
  },
  firebase: {
    liveData: dbContent
  },
  // Explicitly set binding data to firebase as an array.
  created() {
    this.$bindAsArray('clients', dbContent);
  },
  methods: {
    updateTodoText: function(todo, newText) {
      dbContent.child(todo['.key']).child('percentage').set(newText)
    }
  }
}
</script>


<style lang="scss" scoped>
.livedata {
  position: relative;
  display: inline-block;
  padding: 0;
  text-align: center;
  &>.client {
    display: inline-block;
    position: relative;
    text-align: center;
    color: #93A2AC;
    font-weight:100;
    margin: 2rem;
    &:before {
      content: attr(data-name);
      position: absolute;
      width: 100%;
      bottom: -2rem;
      font-weight:400;
    }
    &:after {
      content: attr(data-percent);
      position: absolute;
      width: 100%;
      top: 3.5rem;
      left: 0;
      font-size: 2rem;
      text-align: center;
    }
    .editable {
      position: absolute;
      top: 100%;
      margin: 50px auto;
      width: 60px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 6px;
      left: 0;
      right: 0;
    }
  }
  svg {
    width: 10rem;
    height: 10rem;
    fill: white;

    &:nth-child(1) {

      path {
        stroke: orange;
        stroke-width: 19px;
      }
    }

    &:nth-child(2) {
      position: absolute;
      left: 0;
      top: 0;
      transform: rotate(-90deg);

      path {
        fill: none;
        stroke-width: 21;
        stroke-dasharray: 629;
        stroke: #ddd;
        opacity:1;
        animation: load 1s;
        transition: stroke-dashoffset 1s;
      }
    }
  }
}
@keyframes load{0%{stroke-dashoffset:0}}
</style>

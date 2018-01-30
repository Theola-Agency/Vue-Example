<template>
  <div class="container">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <h1>The below is from a Firebase Database</h1>
    <div class="sk-folding-cube" v-if="headings.length == 0">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>

    <transition-group appear
      name="custom-classes-transition"
      enter-active-class="animated bounce"
      v-else>
      <div v-for="(item, key) in headings" :key="key">
        <h2>{{ item.heading }}</h2>
        <h3>{{ item.subheading }}</h3>
        <div class="row" v-html="item.content"></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import {db} from './firebase/get-content'
import '../assets/spinners.css'

export default {
  name: 'app',
  firebase: {
    headings: db.ref('stuff')
  }
}
</script>

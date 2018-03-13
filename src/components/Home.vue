<template>
  <div class="container">

    <h1 class="mb-4">The below is from a Firebase Database</h1>

    <transition-group appear
      name="custom-classes-transition"
      enter-active-class="animated fadeInUpBig">
      <div v-for="(item, key) in headings" :key="key">
        <h2 v-text="item.heading"></h2>
        <h3 v-text="item.subheading"></h3>
        <div class="row" v-html="item.content"></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import {db} from './firebase/get-content'
import '../assets/animate.css'

export default {
  name: 'app',
  firebase: {
    headings: db.ref('stuff')
  }
}
</script>

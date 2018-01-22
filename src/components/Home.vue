<template>
  <div>
    <div v-for="(item, key) in headings" :key="key">
      <h1>{{ item.heading }}</h1>
      <h2>{{ item.subheading }}</h2>
      <div class="row" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import {db} from './firebase/get-content'

export default {
  name: 'app',
  firebase: {
    headings: db.ref('stuff')
  }
}
</script>

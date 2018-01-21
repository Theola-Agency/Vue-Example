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
import GetHomeContent from './firebase/get-home-content'

export default {
  name: 'app',
  data () {
    return {
      headings: {
        Person1: {
          heading: 'Default',
          subheading: 'Default',
          content: 'Default'
        },
        Person2: {
          heading: 'Default',
          subheading: 'Default',
          content: 'Default' }
      }
    }
  },
  mixins: [GetHomeContent]
}
</script>

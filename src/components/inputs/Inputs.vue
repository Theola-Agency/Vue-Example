<template>
  <div class="row">
    <div class="col-12 col-md-6 my-3" v-for="contentItem in contentList" v-bind:key="contentItem.key">
      <div class="card bg-dark text-white h-100">
        <div class="card-body">
          <textarea name="" id="" cols="30" rows="10" class="form-control mb-2"
          v-model="contentItem['.value']"
          @input="updateContent(contentItem, $event.target.value)"></textarea>
          <p class="pre mb-0">{{contentItem['.value']}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase/get-content'

var dbContent = db.ref('contentchange')

export default {
  firebase: {
    contentList: dbContent
  },
  methods: {
    updateContent: function (contentItem, newContent) {
      /*dbContent.child(contentItem['.key']).child('text').set(newContent)
      add .child('whatevs') to make a child in the relational db */
      dbContent.child(contentItem['.key']).set(newContent)
    }
  }
}
</script>

<style lang="scss">
.pre {
  white-space: pre-line;
}
</style>

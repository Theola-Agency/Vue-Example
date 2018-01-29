<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="my-3" v-for="contentItem in contentList" v-bind:key="contentItem.key">
          <div class="card bg-dark text-white h-100">
            <div class="card-body">
              <textarea name="" id="" cols="30" rows="10" class="form-control mb-2"
              v-model="contentItem['.value']"
              @input="updateContent(contentItem, $event.target.value)"
              :disabled="isDisabled == 1 ? true : false"></textarea>
              <p class="pre mb-0">{{contentItem['.value']}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 my-3">
        <div class="sticky">
          <h3>Inputted Data</h3>
          <pre class="mt-2">{{ $data }}</pre>
          <p>P.S. This column uses "sticky" CSS</p>
          <hr>
          <h3>Disabling Inputs</h3>
          <p>We can disable inputs with the following toggle:</p>
          <button
          @click="isDisabled = (isDisabled + 1) % 2">Toggle Editability</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-12">
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
  },
  data () {
    return {
      isDisabled: 0,
      contentInDB: []
    }
  },
  // Explicitly set binding data to firebase as an array.
  created() {
    this.$bindAsArray('contentInDB', dbContent);
  }
}
</script>

<style lang="scss" scoped>
.pre {
  white-space : pre-line;
}

.sticky {
  position : sticky;
  top      : 0;
  left     : 0;
}
</style>

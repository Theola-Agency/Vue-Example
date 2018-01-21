/* Partially ripped off from https://codepen.io/anon/pen/KZbdXb#anon-login */
export default {
  data() {
    return {
      authors: ['1', '590'],
      currentAuthor: '1',
      posts: null,
      apiURL: 'http://100creek.local/wp-json/wp/v2/posts/?_embed&per_page=3&author=',
      excerptFilter: '[&#8230;]'
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentAuthor: 'fetchData'
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', this.apiURL + self.currentAuthor)
      xhr.onload = function () {
        self.posts = JSON.parse(xhr.responseText)
        console.log(self.posts[0].link)
      }
      xhr.send()
    }
  }
}

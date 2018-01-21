export default {
  data() {
    return {
      scrollPosition: 0
    }
  },
  methods: {
    handleScroll: function (e) {
      var heightOfWindow = window.innerHeight;
      var contentScrolled = e.srcElement.scrollTop;
      var bodyHeight = this.$refs.homecontainer.offsetHeight;

      if (bodyHeight - contentScrolled <= heightOfWindow) {
        this.scrollPosition = 100;
      } else {
        var total = bodyHeight - heightOfWindow;
        var got = contentScrolled;
        this.scrollPosition = parseInt((got / total) * 100);
      }
    }
  }
}

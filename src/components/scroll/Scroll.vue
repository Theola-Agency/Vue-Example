<template>
  <div class="progress">
    <div
    class="progress-bar"
    role="progressbar"
    style="height: 5px"
    :aria-valuenow="scrolldata"
    aria-valuemin="0"
    aria-valuemax="100"
    :style="{ height: scrolldata + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  props: {
    scrolldata: {
      type: Number
    }
  }
}
</script>

<style scss>
.progress {
  position         : fixed;
  right            : 25px;
  top              : 100px;
  bottom           : 100px;
  margin           : auto;
  width            : 7px;
  max-height       : 350px;
  height           : auto;
  background-color : #515354;
  overflow         : hidden;
}

.progress-bar {
  position         : absolute;
  top              : 0;
  left             : 0;
  width            : 100%;
  background-color : #ba644b;
}
</style>

<template>
  <div class='container slider'>

    <input type='radio' name='slider' selected='false' :checked="key+1 === checked"
    v-for='(item, key) in items' :key='"check" + key' :id="'slide' + (key+1)">

    <div class='slides'>
      <div class='inner' :style="{width: items.length * 100 + '%'}" :data-items="items.length">
        <article v-for='(item, key) in items' :key='"article" + key' class='slide'>
          <div class='image-container'>
            <img :src='item.img' alt='item.title' />
          </div>
          <div class='title'>{{item.title}}</div>
          <div class='teaser'>{{item.content}}</div>
        </article>
      </div><!-- .inner -->
    </div>

    <label v-for='(item, key) in items' :key='"label" + key' :for="'slide' + (key+1)" @click="changeSlide(key+1)"></label>

    <div @click="changeSlide(checked-1)">Prev</div>
    <div @click="changeSlide(checked+1)">Next</div>
  </div>
</template>

<script>
// define slider component

let timer = null, /* Controls timer for automatic sliding */
items = [{
  title: 'Article 1',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}, {
  title: 'Article 2',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}, {
  title: 'Article 3',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}, {
  title: 'Article 4',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex arcu, fringilla in urna quis, ultrices efficitur neque. Morbi lacinia arcu tellus, a imperdiet'
}]

export default {
  data () {
    return {
      items: items, /* Contains slide data */
      checked: 1, /* Controls which slide is shown */
      autoPlay: 4000 /* Amount of time for slide to show in ms. Set to 0 to disable */
    }
  },
  methods: {
    changeSlide (item) {
      this.resetTimer()
      switch (item) {
        case 0:
          this.checked = this.items.length
          break
        case this.items.length+1:
          this.checked = 1
          break
        default:
          this.checked = item
          break
      }
    },
    startTimer () {
      timer = setInterval(() => {
        this.changeSlide(this.checked+1)
        }, this.autoPlay)
    },
    resetTimer () {
      clearInterval(timer)
      this.startTimer()
    }
  },
  mounted () {
    if(this.autoPlay > 0) {
      this.startTimer()
    }
  },
  beforeDestroy() {
    clearInterval(timer)
  }
}
</script>

<style lang="scss" scoped>

.slider {
  max-width  : 600px;
  text-align : center;
  margin     : 0 auto;

  input[type='radio'] {
    display : none;
  }

  label {
    background    : #CCC;
    display       : inline-block;
    width         : 10px;
    height        : 10px;
    margin        : 0 3px;
    border-radius : 5px;
    cursor        : pointer;
  }
}

.slide {

  .image-container {

    img {
      width  : 100%;
      height : auto;
    }
  }
  .title {
    font-size   : 20px;
    font-weight : 700;
  }
}

.slides {
  width    : 100%;
  overflow : hidden;

  .inner {
    display    : flex;
    transform  : translateZ(0);
    transition : all 500ms ease-in-out;

    @for $i from 1 through 10 {
      &[data-items="#{$i}"] {

        article {
          width : percentage(1 / $i);
        }
      }
    }
  }
}

@for $i from 1 through 10 {
  #slide#{$i}:checked {

    ~ .slides .inner {
      margin-left : percentage(-($i - 1));
    }

    ~ label[for="slide#{$i}"] {
      background : #333;
    }
  }
}
</style>

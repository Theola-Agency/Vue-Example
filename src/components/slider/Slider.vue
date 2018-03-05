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
      </div> <!-- .inner -->
    </div>

    <label v-for='(item, key) in items' :key='"label" + key' :for="'slide' + (key+1)" @click="check(key+1)"></label>

    <div @click="check(checked-1)">Prev</div>
    <div @click="check(checked+1)">Next</div>
  </div>
</template>

<script>
// define slider component
let items = [{
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
      items: items,
      checked: 1
    }
  },
  methods: {
    check (item) {
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
    }
  }
}
</script>

<style lang="scss" scoped>

.slider {
  max-width  : 600px;
  text-align : center;
  margin     : 0 auto;
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
    text-align  : left;
  }

  .teaser {
    text-align : left;
  }
}

.slides {
  width    : 100%;
  overflow : hidden;

  .inner {
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

  article {
    float : left;
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

input[type='radio'] {
  display : none;
}

label {
  background    : #CCC;
  display       : inline-block;
  cursor        : pointer;
  width         : 10px;
  height        : 10px;
  border-radius : 5px;
}
</style>

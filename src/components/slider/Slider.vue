<template>
  <div id='demo'>
    <div id='slider'>

      <input type='radio' name='slider' selected='false' :checked='key === 0'
      v-for='(item, key) in items' :key='key' :id="'slide' + (key+1)" v-once>

      <div id='slides'>
        <div id='overflow'>
          <div class='inner'>
            <article v-for='(item, key) in items' :key='key' class='slide'>
              <div class='image-container'>
                <img :src='item.img' alt='item.title' />
              </div>
              <div class='title'>{{item.title}}</div>
              <div class='teaser'>{{item.content}}</div>
            </article>
          </div> <!-- .inner -->
        </div> <!-- #overflow -->
      </div>

      <label v-for='(item, key) in items' :key='key' :for="'slide' + (key+1)"></label>
    </div>
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
  name: 'app',
  data () {
    return {
      items: items
    }
  }
}
</script>

<style lang="scss">
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

#slider {
  max-width  : 600px;
  text-align : center;
  margin     : 0 auto;
}

#overflow {
  width    : 100%;
  overflow : hidden;
}

#slides .inner {
  width : 400%;
}

#slides .inner {
  transform  : translateZ(0);
  transition : all 500ms ease-in-out;
}

#slides article {
  width : 25%;
  float : left;
}

#slide1:checked ~ #slides .inner {
  margin-left : 0;
}

#slide2:checked ~ #slides .inner {
  margin-left : -100%;
}

#slide3:checked ~ #slides .inner {
  margin-left : -200%;
}

#slide4:checked ~ #slides .inner {
  margin-left : -300%;
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

#slide1 :checked ~ label {
  background : #333;
}
</style>

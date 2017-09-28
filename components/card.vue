<template>

    <div class="">
      <div class="card css container column"  v-if="type === 'CSS'">
        <div class="number container justify-content-between">
          <slot name="index"></slot>
        </div>
        <div class="language">
          <h4>
            <slot name="language"></slot>
          </h4>
        </div>
        <div class="text">
          <h2>
            <slot name="text"></slot>
          </h2>
        </div>
        <div class="tags">
          <slot name="tag">
          </slot>
        </div>
      </div>



      <div class="card js container column" v-if="type === 'JS'">
        <div class="number container justify-content-between">
          <slot name="index"></slot>
        </div>
        <div class="language">
          <h4>
            <slot name="language"></slot>
          </h4>
        </div>
        <div class="text">
          <h2>
            <slot name="text"></slot>
          </h2>
        </div>
        <div class="tags">
          <slot name="tag">
          </slot>
        </div>
      </div>


      <div class="card html container column" v-if="type === 'HTML'">
        <div class="number container justify-content-between">
          <slot name="index"></slot>
        </div>
        <div class="language">
          <h4>
            <slot name="language"></slot>
          </h4>
        </div>

        <div class="text" v-show="size == 'large'">
          <h2>
            <slot name="text"></slot>
          </h2>
        </div>

        <div class="text" v-show="size == 'medium'">
          <h4>
            <slot name="text"></slot>
          </h4>
        </div>

        <div class="text" v-show="size == 'small'">
          <h6>
            <slot name="text"></slot>
          </h6>
        </div>

        <div class="tags">
          <slot name="tag">
          </slot>
        </div>
      </div>


    </div>

</template>

<script>
export default {
  name: 'cards',
  data() {
    return {
    }
  },
  props: {
  		type: {
  			type: String
  		},
      size: {
        type: String,
        default: 'large'
      }
  	},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.number {
    // background: red
}
.language {
    // background: yellow
}
.text {
    // background: orange;
    flex-grow: 1;
}
.tags {
    // background: blue
}

.card {
    margin: 0 auto;
    width: 90%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    min-height: 350px;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
      &:hover {
        transform: scale(1.1,1.1);
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.2);
      }
}
.css {
    color: #fff;
    background: #fff;
    background: linear-gradient(10deg, #6096FB, #64D4EA);
}
.js {
    color: #fff;
    background: #fff;
    background: linear-gradient(10deg, #F8A856, #F85555);
}
.html {
    color: #fff;
    background: #fff;
    background: linear-gradient(10deg, red, blue);
}
.tag li {
    margin-right: 5px;
    background: #fff;
    color: #414141;
    padding: 5px 10px;
    border-radius: 20px;
    font-weight: 900px;
    font-size: 12px;
}
</style>

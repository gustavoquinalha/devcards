<template>
<div class="bg">
  <!-- <typography></typography> -->
  <topo></topo>


  <div class="container-cards container wrap size margin">
    <div class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 margin-bottom-30" v-for="(x, index) in cards">
      <div class="">

        <cards type="CSS" v-if="x.language === 'CSS'">
          <span slot="index">#00{{index + 1}}</span>
          <span slot="language">{{x.language}}</span>
          <span slot="text">{{x.text}}</span>
          <span slot="tag"><div >
            <ul class="tag list-none container wrap">
              <li v-for="tag in x.tags"><b>{{tag}}</b></li>
            </ul>
          </div></span>
        </cards>

        <cards type="JS" v-if="x.language === 'JS'">
          <span slot="index">#00{{index + 1}}</span>
          <span slot="language">{{x.language}}</span>
          <span slot="text">{{x.text}}</span>
          <span slot="tag"><div >
            <ul class="tag list-none container wrap">
              <li v-for="tag in x.tags"><b>{{tag}}</b></li>
            </ul>
          </div></span>
        </cards>

        <cards size="small" type="HTML" v-if="x.language === 'HTML'">
          <span slot="index">#00{{index + 1}}</span>
          <span slot="language">{{x.language}}</span>
          <span slot="text">{{x.text}}</span>
          <span slot="tag"><div >
            <ul class="tag list-none container wrap">
              <li v-for="tag in x.tags"><b>{{tag}}</b></li>
            </ul>
          </div></span>
        </cards>

      </div>
    </div>
  </div>

  <div class="buttons container column justify-content-center align-items-center">
    <div class="button html container justify-content-center align-items-center">
      <h6>HTML</h6>
    </div>
    <div class="button css container justify-content-center align-items-center">
      <h6>CSS</h6>
    </div>
    <div class="button js container justify-content-center align-items-center">
      <h6>JS</h6>
    </div>
  </div>




</div>
</template>

<script>
import typography from '@/components/typography';
import topo from '@/components/topo';
import cards from '@/components/card';

export default {
  components: {
    topo,
    typography,
    cards
  },
  data() {
    return {
      cards: [{
          language: 'CSS',
          text: 'Use flebox',
          tags: ['CSS', 'Flebox', 'Grid']
        }, {
          language: 'CSS',
          text: 'Não use float',
          tags: ['CSS', 'Flebox', 'Grid']
        },
        {
          language: 'CSS',
          text: 'Não use !important',
          tags: ['CSS', 'Flebox', 'Grid']
        },
        {
          language: 'JS',
          text: 'Não use var',
          tags: ['JS', 'Variables']
        },
        {
          language: 'JS',
          text: 'Use Const',
          tags: ['JS', 'Variables']
        },
        {
          language: 'JS',
          text: 'Use Let',
          tags: ['JS', 'Variables']
        },
        {
          language: 'HTML',
          text: 'Não se esqueça do head, main, footer...',
          tags: ['HTML', 'Tags']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
.bg {
    min-height: 100vh;
}
.container-cards {
    padding-top: 10px;
    transform: translateY(-100px);
}
.buttons {
  min-height: 100vh;
  width: 100px;
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 0;
  overflow: hidden;
    .button {
      width: 50px;
      height: 50px;
      // background: #f2f2f2;
      border-radius: 50%;
      margin-bottom: 10px;
      transition: .1s;
      cursor: pointer;
      overflow: hidden;
      box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
        &:hover {
          transform: scale(1.1,1.1);
          box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
          background: #333;
          color: #fff;
        }
    }
}
.css {
    color: #fff;
    background: linear-gradient(10deg, #6096FB, #64D4EA);
}
.js {
    color: #fff;
    background: linear-gradient(10deg, #F8A856, #F85555);
}
.html {
    color: #fff;
    background: linear-gradient(10deg, red, blue);
}
</style>

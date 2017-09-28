<template>
<div class="bg">
  <!-- <typography></typography> -->


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

      </div>
    </div>
  </div>




</div>
</template>

<script>
import typography from '@/components/typography';
import cards from '@/components/card';

export default {
  components: {
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
.bg {
    // background: #f2f2f2;
    min-height: 100vh;
}
.container-cards {
    // border: 1px solid #ddd;
    padding-top: 10px;
}
</style>

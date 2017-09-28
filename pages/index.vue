<template>
<div class="bg">
  <topo></topo>

  <div class="container-cards container wrap size margin">
    <div class="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 margin-bottom-30" v-for="(x, index) in filteredItems">
      <div class="">
        <transition name="fade">
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
        </transition>

        <transition name="fade">
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
        </transition>

        <transition name="fade">
          <cards fontSize="38" type="HTML" v-if="x.language === 'HTML'">
            <span slot="index">#00{{index + 1}}</span>
            <span slot="language">{{x.language}}</span>
            <span slot="text">{{x.text}}</span>
            <span slot="tag"><div >
            <ul class="tag list-none container wrap">
              <li v-for="tag in x.tags"><b>{{tag}}</b></li>
            </ul>
          </div></span>
          </cards>
        </transition>

      </div>
    </div>
  </div>

  <div class="buttons container column justify-content-center align-items-center">
    <div class="button all container justify-content-center align-items-center" @click="filterKey = ''">
      <h6>ALL</h6>
    </div>
    <div class="button html container justify-content-center align-items-center" @click="filterKey = 'HTML'">
      <h6>HTML</h6>
    </div>
    <div class="button css container justify-content-center align-items-center" @click="filterKey = 'CSS'">
      <h6>CSS</h6>
    </div>
    <div class="button js container justify-content-center align-items-center" @click="filterKey = 'JS'">
      <h6>JS</h6>
    </div>
    <div class="configs">
      <select v-model="filterKey">
        <option value="" id="forAll">Show All</option>
        <option value="HTML" id="forHtml">HTML</option>
        <option value="CSS" id="forCss">CSS</option>
        <option value="JS" id="forJs">JS</option>
      </select>
    </div>
  </div>

</div>
</template>

<script>
import topo from '@/components/topo';
import cards from '@/components/card';

export default {
  components: {
    topo,
    cards
  },
  data() {
    return {
      isLoading: false,
      filterKey: '',
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
  },
  computed: {
    filteredItems() {
      return this.cards.filter(x => {
        return x.language.toLowerCase().indexOf(this.filterKey.toLowerCase()) > -1;
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
.fade-enter-active {
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    position: absolute;
}
.fade-leave-active {
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    // position: absolute;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    position: absolute;
}

.configs {
    display: none;
}
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
        border-radius: 50%;
        margin-bottom: 10px;
        transition: 0.1s;
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
.all {
    background: #fff;
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

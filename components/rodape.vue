<template>
  <div>
    <footer>
      <div class="footer container justify-content-center align-items-center">
        <div class="">
          <a href="https://github.com/gustavoquinalha/devcards" target="_blank">Github</a>
        </div>
      </div>
    </footer>
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

  	},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.footer {
  min-height: 100px;
  background: linear-gradient(10deg, #333, #222);
  text-align: center;
      a {
        color: #fff
      }
}

</style>

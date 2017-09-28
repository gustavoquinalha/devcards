<template>
  <div>
    <header>
      <div class="header container justify-content-center align-items-center">
        <div class="box-title">
          <div class="logo">
            <img src="~/assets/images/logo.svg" alt="" width="200">
          </div>
          <p>O jeito mais facíl de você se tornar um Dev.</p>
        </div>
      </div>
    </header>
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
.header {
  min-height: 60vh;
  background: linear-gradient(10deg, #333, #222);
  color: #fff;
    .box-title {
      transform: translateY(-50px);
      text-align: center;
        .logo {
          padding-bottom: 20px
        }
    }
}

</style>

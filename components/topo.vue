<template>
  <div>
    <header>
      <div class="header container justify-content-center align-items-center">
        <div class="box-title">
          <h1>
            DevCards
          </h1>
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
  min-height: 50vh;
  background: linear-gradient(10deg, #333, #222);
  color: #fff;
    .box-title {
      transform: translateY(-50px);
      text-align: center;
    }
}

</style>

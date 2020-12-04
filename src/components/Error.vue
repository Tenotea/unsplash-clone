<template>
  <div class="error-banner">
    <i class="material-icons"> cancel </i>
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-banner {
    background: #ff1155;
    color: white;
    position: fixed;
    padding: 10px 30px 10px 0px;
    top: 10px;
    right: 10px;
    display: inline-flex;
    place-items: center;
    border-radius: 5px;
    .material-icons {
      padding: 0px 20px;
    }
  }
</style>
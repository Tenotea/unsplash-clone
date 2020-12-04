<template>
  <div class="loader">
    <div class="loader--spinner"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .loader {
    margin: auto;
    display: flex;
    place-items: center;
    max-width: 1000px;
    min-width: 250px;
    @media screen and (min-width: 500px){
      min-width: 450px;
    }
    min-height: 300px;
    &--spinner {
      width: 40px;
      height: 40px;
      margin: auto;
      border-radius: 50%;
      border: 3px solid #e3e8ec;
      border-top-color: #2e9bf5;
      transform: rotate(0deg);
      animation: spin 500ms linear 0s infinite forwards;
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
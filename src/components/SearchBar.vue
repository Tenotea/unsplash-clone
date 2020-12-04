<template>
  <form class="form" @submit.prevent="fetchResults()">
    <div v-if="route !== 'Search'" class="form--field">
      <i class="material-icons form--field__icon" :class="{typing: typing}" @click="fetchResults()"> search </i>
      <input type="search" class="form--field__textbox" v-model="query" placeholder="Search for photo" @focusin="updateTypingStatus" @focusout="updateTypingStatus">
    </div>
    <div v-else class="form--field">
      <h1 class="form--field__search-text">
        Search Results for <span class="query">"{{ $route.params.query }}"</span>
      </h1>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      typing: false
    }
  },
  emits: ['searching', 'searched', 'errored'],
  methods: {
    updateTypingStatus () {
      this.typing = !this.typing
    },

    fetchResults () {
      if (this.query) {
        this.$emit('searching')
        this.$router.push({name: 'Search', params: { query: this.query}})
        this.axiosInstance.get('/search/photos', {
          params: {
            query: this.query,
            page: 1,
            orientation: 'portrait',
            content_filter: 'high',
          }
        })
        .then ( body => {
          this.$emit('searched', body.data.results)
        }).catch( () => {
          this.$emit('errored', 'Could not fetch images')
        })
      }
    }
  },

  computed: {
    route () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/search_bar.scss";
</style>
<template>
  <div class="home">
    <search-bar @searched="populateSearchResults" @searching="clearSearchResults" />
    <image-display :image-results="searchResults" :result-fetched="isResultFetched" @errored="createError" />
    <error-indicator v-if="errorMsg" :msg="errorMsg" />
    <p class="caption"> An mini unsplash clone made by Adelakun Emmanuel (Tenotea) </p>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import ImageDisplay from '@/components/ImageDisplay'
import ErrorIndicator from '@/components/Error'

export default {
  name: 'Home',
  data () {
    return {
      searchResults: [],
      errorMsg: null,
      isResultFetched: false
    }
  },
  methods: {
    populateSearchResults (results) {
      this.searchResults = results
      this.isResultFetched = true
    },
    clearSearchResults () {
      this.isResultFetched = false
      this.searchResults = []
    },
    createError (msg) {
      this.errorMsg = msg
    }
  },
  components: {
    SearchBar,
    ImageDisplay,
    ErrorIndicator,
  },
  created () {
    if ( this.$route.name !== 'Search') {
      this.axiosInstance.get('/photos/random', {
        params: {
          query: 'African',
          orientation: 'portrait',
          content_filter: 'high',
          count: 8
        }
      })
      .then ( body => {
        this.populateSearchResults(body.data)
      }).catch( () => {
        this.createError('Could not fetch images')
      })
    } else {
      this.axiosInstance.get('/search/photos', {
        params: {
          query: this.$route.params.query,
          page: 1,
          orientation: 'portrait',
          content_filter: 'high',
        }
      })
      .then ( body => {
        this.populateSearchResults(body.data.results)
      }).catch( () => {
        this.createError('Could not fetch images')
      })
    }
  },
}
</script>

<style lang="scss">
  .caption {
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 0px 5px 0px 0px;
    background: rgb(230, 242, 255);
    color: rgb(7, 55, 110);
    font-weight: 500;
    padding: 10px;
    font-size: 0.7em;
  }
</style>

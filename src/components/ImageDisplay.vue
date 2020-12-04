<template>
  <div>
    <div v-if="images.length < 1" class="grid-container">
      <div v-for="i in 10" :key="i" class="grid-box">
        <div class="grid-box--placeholder loading">
          <div class="grid-box--placeholder__title"></div>
          <div class="grid-box--placeholder__location"></div>
        </div>
      </div>
    </div>
    <div v-else class="grid-container">
      <div v-for="(image, i) in images" :key="i" class="grid-box" @click="openImageModal(i, $event)" :style="{ backgroundColor: image.color }">
        <img :src="image.urls.small" class="grid-box--img" alt="_unsplash_clone" loading="lazy">
        <div class="grid-box--content">
          <div class="items">
            <div class="grid-box--content__title"> {{ image.user.name }}</div>
            <div class="grid-box--content__location"> {{ image.location ? image.location.name : '&lt;unknown&gt;' }} </div>
          </div>
        </div>
        <div class="grid-box--overlay" v-if="i === openModal">
          <div class="modal">
            <i class="material-icons modal--close"> close </i>
            <img :src="image.urls.raw+'&h=800&dpr=1'" class="modal--image" alt="_unsplash_" loading="lazy" @load="imagePreviewLoading[i] = false">
            <spinner v-if="imagePreviewLoading[i]" />
            <div class="modal--credits">
              <h3 class="modal--credits__author">
                {{ image.user.name }}
              </h3>
              <p class="modal--credits__location">
                {{ image.location ? image.location.name : '&lt;unknown&gt;' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Spinner from './Spinner'
export default {
  props: {
    imageResults: {
      type: Array,
      required: true,
    },
    resultFetched: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: ['errored'],
  data () {
    return {
      openModal: null,
      imagePreviewLoading: new Array(10).fill(true)
    }
  },
  components: {
    Spinner
  },
  methods: {
    openImageModal (index, e) {
      if (e.target.classList.contains('modal--close') || e.target.classList.contains('grid-box--overlay')) {
        this.openModal = null
      } else {
        this.openModal = index
      }
    }
  },
  computed: {
    images () {
      if (this.imageResults && this.imageResults.length < 1 && this.resultFetched) {
        this.$emit('errored', 'No results found')
        return []
      } else {
        this.$emit('errored', null)
        return this.imageResults
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/image_container"
</style>
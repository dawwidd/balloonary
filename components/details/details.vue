<template>
  <div class="row character-details">
    <div class="col-lg-4">
      <div class="col-12 mt-2">
        <span class="name">Characteristics</span>
      </div>
      <div class="col-12">
        <hr class="separator-line">
      </div>
      <div class="col-12 characteristics">
        <span>Status: {{ character.status }}</span>
        <span>Origin: {{ character.origin.name }}</span>
        <span>Location: {{ character.location.name }}</span>
        <span>Species: {{ character.species }}</span>
        <span>Gender: {{ character.gender }}</span>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="col-12 mt-2">
        <span class="name">Episodes</span>
      </div>
      <div class="col-12">
        <hr class="separator-line">
      </div>
      <div class="spinner-wrapper" v-if="isLoading">
        <b-spinner></b-spinner>
      </div>
      <div v-else class="col-12 characteristics">
        <span v-for="episode in episodes" :key="episode.id">{{ episode.episode }} - {{ episode.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: null
  },
  data() {
    return {
      episodes: [],
      isLoading: true
    }
  },
  mounted() {
    this.getEpisodesDetails().then(res => {
      this.episodes = res.data.length > 1 ? res.data : [res.data];
    }).finally(() => {
      this.isLoading = false;
    })
  },
  methods: {
    getEpisodesDetails() {
      const episodeIds = this.character.episode.map(episodeUrl => {
        const urlSplit = episodeUrl.split('/');
        return urlSplit.slice(-1);
      });

      return this.$axios.get(`episode/${episodeIds}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-weight: 700;
  font-size: 20px;
}

.characteristics {
  display: flex;
  flex-direction: column;
  color: #666;

  span {
    width: 100%;
  }
}

.separator-line {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 0.5rem 0;
  width: 100%;
}

.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
</style>
<template>
  <Header />
  <div>
    <h2>Map</h2>
    <input type="file" id="selectFiles" @change="handleFileSelect" >
  </div>
  <Map :map="map" />
</template>

<script>
import Header from './components/Header.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Header,
    Map
  },
  data () {
    return {
      map: []
    }
  },
  methods: {
    handleFileSelect (event) {
      const files = event.target.files;
      if (files.length <= 0) {
        return false;
      }

      const fr = new FileReader();

      fr.onload = e => {
        const result = JSON.parse(e.target.result);

        this.map = result
      }
      fr.readAsText(files.item(0));
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>

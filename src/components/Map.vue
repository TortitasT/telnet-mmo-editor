<template>
  <div class="map">
    <h2>Map</h2>
    <div class="map__wrapper">
      <table>
        <tr v-for="(row , rowIndex) in map" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            <div class="cell">
              {{ cell }}
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  props: {
    map: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/map.scss";
</style>
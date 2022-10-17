<template>
  <div class="map">
    <div class="map__wrapper">
      <table>
        <tr v-for="(row , rowIndex) in map.tiles" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" @contextmenu.prevent="handleClick($event, item)">
            <div class="cell" >
              {{ cell.type }}
            </div>
          </td>
        </tr>
      </table>
    </div>
    <vue-simple-context-menu
      element-id="tileContextMenu"
      :options="options"
      ref="tileContextMenu"
      @option-clicked="optionClicked"
    />
  </div>
</template>

<script>
import VueSimpleContextMenu from 'vue-simple-context-menu';

export default {
  name: 'MapComponent',
  components: {
    VueSimpleContextMenu
  },
  props: {
    map: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      options: [
        {
          name: 'Edit',
          value: 'edit'
        },
        {
          name: 'Delete',
          value: 'delete'
        }
      ]
    }
  },
  methods: {
    handleClick (event, item) {
      this.$refs.tileContextMenu.showMenu(event, item)
    },
    optionClicked (event) {
      // const target = JSON.parse(JSON.stringify(event))
      const option = JSON.parse(JSON.stringify(event)).option
      
      console.log(event);
      if (option.value === 'edit') {
        alert('edit')
      }
    }
  },
}
</script>

<style lang="scss">
@import "../assets/scss/map.scss";
@import "../assets/scss/vue-simple-context-menu.css";
</style>
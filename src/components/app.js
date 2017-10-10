((() => {
  const html = `
    <div class="app">
      <div class="wrapper">
        <div v-for="(tile, index) in tiles" v-bind:key="tile.id" @click="handleClick(tile)"class="box">{{tile.id}}</div>
      </div>
    </div>
  `

  Vue.component("app", {
    template: html,

    data() {
      return {
        tiles: [],
      }
    },

    mounted() {
      const self = this

      self.populateBoard()
    },

    methods: {

      populateBoard() {
        const self = this

        for(let i = 0; i <= 23; i++) {
          self.tiles.push({id: i, showFace: false})
        }

        return self.tiles
      },

      handleClick(event) {
        const self = this

        debugger
      }
    }

  })
}))()

((() => {
  const html = `
    <div class="app">
      <div class="wrapper">
        <div v-for="(tile, index) in tiles" v-bind:key="tile.id" @click="handleClick(tile)"class="box">{{tile.face.name}}</div>
      </div>
    </div>
  `

  Vue.component("app", {
    template: html,

    data() {
      return {
      }
    },

    props: {
      tiles: {
        type: Array,
        required: true
      },

      matchingOptions: {
        type: Array,
        required: true
      },

    },

    mounted() {
      const self = this

      self.populateBoard()
    },

    methods: {

      populateBoard() {
        const self = this

        for(let i = 0; i <= 23; i++) {
          self.tiles.push({id: i, showFace: false, face: self.getRandomElement() })
        }

        return self.tiles
      },

      handleClick(event) {
        const self = this
      },

      getRandomElement() {
        const self = this

        let pairs = self.matchingOptions.filter(object => object.pairs >= 1)

        let item = pairs[Math.floor(Math.random() * pairs.length)]
        self.itemToDecrement(item)

        return item
      },

      itemToDecrement(item) {
        const self = this

        let decrementItem = self.matchingOptions.find(object => object.name === item.name)

        return self.matchingOptions[decrementItem.pairs -=1]
      },

    }

  })
}))()

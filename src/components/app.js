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
        tiles: [],
        matchingOptions: [
          {name: "Rails"},
          {name: "Rails"},
          {name: "PHP"},
          {name: "PHP"},
          {name: "Node"},
          {name: "Node"},
          {name: "React"},
          {name: "React"},
          {name: "GoLang"},
          {name: "GoLang"},
          {name: "Lisp"},
          {name: "Lisp"},
          {name: "Perl"},
          {name: "Perl"},
          {name: "Java"},
          {name: "Java"},
          {name: "C++"},
          {name: "C++"},
          {name: "C"},
          {name: "C"},
          {name: "Ruby"},
          {name: "Ruby"},
          {name: "Python"},
          {name: "Python"},
        ]
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
          self.tiles.push({id: i, showFace: false, face: self.getRandomElement() })
        }

        return self.tiles
      },

      handleClick(event) {
        const self = this
      },

      getRandomElement() {
        const self = this

        let item = self.matchingOptions[Math.floor(Math.random() * self.matchingOptions.length)]
        self.removeItem(item)

        return item
      },

      removeItem(item) {
        const self = this
        let itemToRemove = self.matchingOptions.map(object => object.name === item.name)

        self.matchingOptions.splice(itemToRemove.indexOf(true), 1)

        return self.matchingOptions
      },

    }

  })
}))()

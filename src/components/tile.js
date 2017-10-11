((() => {
  const html = `
    <div class="tile">
      <app :tiles="tiles" :matching-options="matchingOptions"
        @compare-matches="handleEventFromChild">
      </app>
    </div>
  `

  Vue.component("tile", {
    template: html,

    data() {
      return {
        tiles: [],
        matchingOptions: [
          {name: "Rails", pairs: 2},
          {name: "PHP", pairs: 2},
          {name: "Node", pairs: 2},
          {name: "React", pairs: 2},
          {name: "GoLang", pairs: 2},
          {name: "Lisp", pairs: 2},
          {name: "Perl", pairs: 2},
          {name: "Java", pairs: 2},
          {name: "C++", pairs: 2},
          {name: "C", pairs: 2},
          {name: "Ruby", pairs: 2},
          {name: "Python", pairs: 2},
        ],

        guesses: [],
        clickCount: 0,
        round: 1
      }
    },

    methods: {

      handleEventFromChild(event) {
        const self = this

        event.showFace = !event.showFace
        ++self.clickCount
        self.guesses.push(event)

        if(self.round % self.clickCount > 0) {
          self.compareGuesses()
        }
      },

      compareGuesses() {
        const self = this

        if(self.guesses[0].face.name === self.guesses[1].face.name) {
          self.guesses[1].matched = true
          self.guesses[0].matched = true
          self.resetRound()
        } else {
          setTimeout(function() {
            self.resetRound()
          }, 500)
        }
      },

      resetRound() {
        const self = this

        self.clickCount = 0
        self.round = 1
        self.guesses = []

        for(let i = 0; i < self.tiles.length; i++) {
          let tile = self.tiles[i]

          if (tile.showFace === true && tile.matched === false){
            self.tiles[i].showFace = false
          }
        }
      }

    }

  })
}))()

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
        clicks: 0
      }
    },

    mounted() {
      const self = this
    },

    methods: {

      handleEventFromChild(event) {
        const self = this

        event.showFace = !event.showFace
        ++self.clicks
        self.guesses.push(event)
      }

    }

  })
}))()

((() => {
  const html = `
    <div class="app">
      <div class="grid"> </div>
    </div>
  `

  Vue.component("app", {
    template: html,

    data() {
      return {

      }
    },

    mounted() {
      const self = this

      self.grid(4,6)
    },

    methods: {

      grid(rows,cols,target){
        const self = this

        cols = cols || rows
        target = target || "grid"
        var gridDiv = $("." + target)

        _.times(rows, function() {
          gridDiv
          .each(function(){ // allows multiple grids
            $(this).append(self.addRows(rows,cols));
            })
        })
      },

      addRows(rows,cols){
        const self = this

        return $("<div />")
                .addClass("row")
                .html( self.addCols(cols))
      },

      addCols(cols){
        const self = this

        return _.times(cols, function() {
          return $("<div />")
            .addClass("col")
            .html( self.getElement() )
         })
      },

      getElement(){
        var elements = [
            "A",
            "B",
            "C"
        ];
        return _.sample(elements);
      },
    }

  })
}))()

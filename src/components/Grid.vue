<template>
  <div id="grid">
    <h2>{{msg}}</h2>
    <kendo-grid :data-source="localDataSource" :columns="columns" @databinding="onDataBinding" @databound="onDataBound">
    </kendo-grid>
    <button v-on:click="addColumn">Ajout d'une colonne</button>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    data () {
      return {
        msg: 'Kendo UI - Grid',
        columns: [
          "ProductName",
          { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "120px" },
          { field: "UnitsInStock", title: "Units In Stock", width: "120px" }
        ],
        localDataSource: [{
          'ProductID': 1,
          'ProductName': 'Chai',
          'UnitPrice': 18,
          'UnitsInStock': 39
        },
          {
            'ProductID': 2,
            'ProductName': 'Chang',
            'UnitPrice': 19,
            'UnitsInStock': 17
          }
        ]
      }
    },
    methods: {
      onDataBinding: function (ev) {
        console.log("Grid is binding!");
      },
      onDataBound: function (ev) {
        console.log("Grid is bound!");
      },
      addColumn: function () {
        this.columns.push({ field: "Discontinued", width: "120px" });
      }
    }
  }
</script>

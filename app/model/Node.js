Ext.define('App.model.Node', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name : "id",
            type : "int"
        }, {
            name : "name",
            type : "string",
        }, {
            name : "address",
            type : "string",
        }, {
            name : "distance",
            type : "string"
        }, {
            name : "latitude",
            type : "string"
        }, {
            name : "longitude",
            type : "string"
        }, {
            name : "created_at",
            type : "date"
        }]
    },

    calculateDistance: function() {
      var _this = this;
      navigator.geolocation.getCurrentPosition(function(position) {
          rad = function(x) {return x*Math.PI/180;}

          var R = 6371; // earth's mean radius in km
          var dLat  = rad(position.coords.latitude - _this.data.latitude);
          var dLong = rad(position.coords.longitude - _this.data.longitude);

          var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(rad(position.coords.latitude)) * Math.cos(rad(_this.data.latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c;

          _this.set('distance', d.toFixed(3));
      })

      return this.data.distance;
    }
});

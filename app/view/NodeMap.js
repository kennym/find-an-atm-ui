/**
 * @class App.view.NodeMap
 * @extends Ext.Map
 *
 * Node map view
 */
Ext.define('App.view.NodeMap', {
    extend: 'Ext.Map',
    xtype: 'nodemap',

    config: {
        useCurrentLocation: true,
        listeners: {
            maprender: function(comp, map) {
                new google.maps.Marker({
                    position: new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude()),
                    map: map
                });
                var record = this.parent.down('map')._data;
                new google.maps.Marker({
                    position: new google.maps.LatLng(record.latitude, record.longitude),
                    map: map
                })
            }
        }
    }
});
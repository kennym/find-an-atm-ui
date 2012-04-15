Ext.application({
    name: 'App',
    requires: ['Ext.device.*'],

    controllers: ['Main'],
    models: ['Node'],
    stores: ['Nodes'],
    views: [
        'Home',
        'NodeList',
        'NodeDetail',
        'NodeMap',
        'AddNodeForm'
    ],

    launch: function() {
        var geo = new Ext.util.Geolocation({
            autoUpdate: true,
            allowHighAccuracy: true,
            listeners: {
                locationupdate: function(geo) {
                    window.lat = geo.getLatitude();
                    window.lon = geo.getLongitude();
                }
            }
        });

        Ext.Viewport.add({
            xclass: 'App.view.Home'
        });
    }
});
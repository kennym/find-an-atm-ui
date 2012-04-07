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
        'NodeMap'
    ],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'App.view.Home'
        });

        var geo = new Ext.util.Geolocation({
                autoUpdate: true,
                allowHighAccuracy: true,
                listeners: {
                    locationupdate: function(geo) {
                        lat = geo.getLatitude();
                        lon = geo.getLongitude();
                    }
                }
            });
    }
});
Ext.application({
    name: 'App',

    controllers: ['Main'],
    models: ['Node'],
    stores: ['Nodes'],
    views: [
        'Home',
        'NodeList'
    ],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'App.view.Home'
        });
    }
});
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

        var loadingMask = new Ext.LoadMask(Ext.getBody(), {message:"Please wait..."});

        // invokes before each ajax request
        Ext.Ajax.on('beforerequest', function(){
                // showing the loadding mask
                loadingMask.show();
        });

        // invokes after request completed
        Ext.Ajax.on('requestcomplete', function(){
                // showing the loadding mask
                loadingMask.hide();
        });

        // invokes if exception occured
        Ext.Ajax.on('requestexception', function(){
                //TODO: need to handle the server exceptions
        });
    }
});
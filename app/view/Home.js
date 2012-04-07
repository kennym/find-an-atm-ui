/**
 * @class App.view.Home
 * @extends Ext.Container
 * The home view
 */
Ext.define('App.view.Home', {
    extend: 'Ext.Container',
    xtype: 'homeview',
    requires: [
        'App.view.NodeList',
        'App.model.Node',
        'App.store.Nodes'
    ],

    config: {
        layout: 'card',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'searchfield',
                        name: 'query'
                    },
                    // {
                    //     iconCls: 'refresh',
                    //     handler: function(event, btn) {
                    //         Ext.StoreMgr.get('Nodes').load();
                    //     }
                    // }
                ]
            },
            {
                xtype: 'nodelist'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer',
                        flex: 0.5
                    },
                    {
                        xtype: 'button',
                        html: 'Explore',
                        centered: true
                    },
                    {
                        xtype: 'button',
                        html: 'Add'
                    },

                ]
            }
        ]
    }
});
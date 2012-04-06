/**
 * @class App.view.Home
 * @extends Ext.Container
 * The home view
 */
Ext.define('App.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homeview',
    requires: [
        'App.view.NodeList',
        'App.model.Node',
        'App.store.Nodes'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'searchfield',
                        name: 'query'
                    }
                ]
            },
            {
                xtype: 'nodelist',
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
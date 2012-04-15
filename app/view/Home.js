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
                        name: 'searchbyname',
                        placeHolder: 'Search By Name',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'nodelist',
                grouped: true
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer',
                        flex: 1
                    },
                    {
                        iconCls: 'add1',
                        iconMask: true,
                        action: 'addNode'
                    },

                ]
            }
        ]
    }
});
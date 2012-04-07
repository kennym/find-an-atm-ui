/**
 * @class App.view.Home
 * @extends Ext.Container
 * The home view
 */
Ext.define('App.view.Home', {
    extend: 'Ext.navigation.View',
    xtype: 'homeview',
    requires: [
        'App.view.NodeList',
    ],

    config: {

        items: [
            {
                title: 'Home view',
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
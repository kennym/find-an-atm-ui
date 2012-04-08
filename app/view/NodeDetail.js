/**
 * @class App.view.NodeDetail
 * @extends Ext.Container
 *
 * Shows the map for the node.
 */
Ext.define('App.view.NodeDetail', {
    extend: 'Ext.Panel',
    xtype: 'nodedetail',
    requires: [
        'App.view.NodeMap'
    ],
    config: {
        layout: 'card',
        title: 'Detail',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Detail',
                items: [
                    {
                        ui: 'back',
                        html: 'Back',
                        handler: function(button) {
                            Ext.Viewport.getLayout().setAnimation({
                                    type: 'slide',
                                    direction: 'right'
                            });
                            Ext.Viewport.setActiveItem(Ext.ComponentQuery.query('homeview')[0]);
                            Ext.Viewport.getLayout().setAnimation({
                                    type: 'slide',
                                    direction: 'left'
                            });
                        }
                    }
                ]
            },
            {
                xtype: 'nodemap'
            }
        ],
        record: null
    },
    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('map').setData(newRecord.data);
        }
    }
});
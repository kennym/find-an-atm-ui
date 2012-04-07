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
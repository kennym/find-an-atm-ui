/**
 * @class App.store.Nodes
 * @extends Ext.data.Store
 *
 *
 */
Ext.define('App.store.Nodes', {
    extend: 'Ext.data.Store',
    id: 'nodelist',
    requires: [
        "App.model.Node",
        "Ext.data.proxy.JsonP"
    ],

    config: {
        model: 'App.model.Node',
        autoLoad: true,
        sorters: 'distance',
        proxy: {
            type: 'jsonp',
            url: 'http://find-an-atm.herokuapp.com/nodes.json',
            reader: {
                type: 'json',
                rootProperty: ""
            }
        },
        listeners: {
            load: function(records, successful, operation) {
                records.each(function(record) {
                    record.calculateDistance();
                })
            },
        }
    }
});
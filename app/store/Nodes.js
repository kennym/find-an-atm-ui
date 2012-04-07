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
        autoLoad: true,
        model: 'App.model.Node',
        sorters: 'distance',
        grouper: {
            groupFn: function(record) {
                var grouper;
                var distance = parseFloat(record.get('distance'));

                if (distance < 0.5) {
                    grouper = "Close to you";
                } else if (distance < 1.0) {
                    grouper = "5 minutes walk";
                } else if (distance < 5.0) {
                    grouper = "Short car drive";
                } else {
                    grouper = "Quite far away";
                }

                return grouper;
            },
            sort_property: 'distance',
            direction: "DESC"
        },
        proxy: {
            type: 'jsonp',
            url: 'http://find-an-atm.kennymeyer.net/nodes.json',
            reader: {
                type: 'json',
                rootProperty: ""
            },
            afterRequest: function(request, success) {
                console.log(request);
                console.log(sucesss);
            }
        },
        listeners: {
            load: function(records, successful, operation) {
                records.each(function(record) {
                    record.calculateDistance();
                });
            }
        }
    }
});
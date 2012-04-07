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
                var string;
                var distance = parseFloat(record.get('distance'));

                if (distance < 0.5) {
                    string = "Close to you";
                } else if (distance < 1.0) {
                    string = "5 minutes walk";
                } else if (distance < 5.0) {
                    string = "Short car drive";
                } else {
                    string = "Quite far away";
                }
                return string;
            },
            sort_property: 'distance',
            direction: "DESC"
        },
        proxy: {
            type: 'jsonp',
            url: 'http://find-an-atm.herokuapp.com/nodes.json',
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
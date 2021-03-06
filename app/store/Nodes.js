/**
 * @class App.store.Nodes
 * @extends Ext.data.Store
 *
 *
 */
Ext.define('App.store.Nodes', {
    extend: 'Ext.data.Store',
    id: 'nodestore',
    requires: [
        "App.model.Node"
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
            sortProperty: 'distance'
        },
        proxy: {
            type: 'ajax',
            url: window.HOST_URL + '/nodes.json',
            extraParams: {
                latitude: window.lat,
                longitude: window.lon
            },
            reader: {
                type: 'json',
                rootProperty: ""
            }
        },
        listeners: {
            load: function(records, successful, operation) {
                if (successful.length != 0 && successful[0].data.name == null) {
                    Ext.Logger.log("Seems like a cross-domain issue...");
                    records.removeAll();
                } else if (successful.length == 0) {
                    Ext.Msg.alert("Error", "Oops.. an error occurred");
                } else {
                    records.each(function(record) {
                        record.calculateDistance();
                    });
                }
            }
        }
    }
});
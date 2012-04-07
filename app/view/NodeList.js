/**
 * @class App.view.NodeList
 * @extends Ext.List
 *
 * The node list view
 */
Ext.define('App.view.NodeList', {
    extend: 'Ext.List',
    xtype: 'nodelist',
    requires: ["App.store.Nodes"],
    config: {
        itemTpl: Ext.create(
            'Ext.XTemplate',
            '<div class="node-wrapper">',
            '   <div class="node">',
            '       <h2>{name}</h2>',
            '       <span class="distance">{[this.showHumanDistance(values.distance)]}</span>',
            '   </div>',
            '</div>',
            {
                showHumanDistance: function(distance) {
                    try {
                        var response;
                        distance = parseFloat(distance);
                        if (distance < 2.0) {
                            response = distance * 1000 + " m";
                        } else {
                            response = distance + " km";
                        }
                        return response;
                    } catch (e) {
                        return '';
                    }
                }
            }
        ),
        store: 'Nodes'
    }
});
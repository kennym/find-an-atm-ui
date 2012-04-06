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
            '       <span class="distance">{distance}</span>',
            '   </div>',
            '</div>'
        ),
        store: 'Nodes'
    }
});
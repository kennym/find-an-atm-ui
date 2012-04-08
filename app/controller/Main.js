Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            home:           'homeview',
            nodelist:       'nodelist',
            nodeDetail:     'nodedetail',
            addNodeForm:    'addnodeform',
            addNodeButton:  'button[action=addNode]'
        },
        control: {
            nodelist: {
                itemtap: 'showNodeDetail'
            },
            addNodeButton: {
                tap: 'showAddNodeForm'
            }
        }
    },

    showNodeDetail: function(list, index, node, record) {
        if (!this.getNodeDetail()) {
            this.nodeDetail = Ext.create('App.view.NodeDetail');
        }
        this.nodeDetail.setRecord(record);
        Ext.Viewport.getLayout().setAnimation({
                type: 'slide',
                direction: 'left'
        });
        Ext.Viewport.setActiveItem(this.nodeDetail, this.getHome());
    },

    showAddNodeForm: function(button) {
        if (!this.getAddNodeForm()) {
            this.addNodeForm = Ext.create('App.view.AddNodeForm');
        }

        Ext.Viewport.getLayout().setAnimation({
                type: 'slide',
                direction: 'up'
        });
        Ext.Viewport.setActiveItem(this.addNodeForm);
    }
});
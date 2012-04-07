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
        var nodeDetail = this.getNodeDetail();

        if (!nodeDetail) {
            this.nodeDetail = Ext.create('App.view.NodeDetail');
        }

        this.nodeDetail.setRecord(record);

        this.getHome().push(this.nodeDetail);
    },

    showAddNodeForm: function(button) {
        if (!this.getAddNodeForm()) {
            this.addNodeForm = Ext.create('App.view.AddNodeForm');
        }

        this.getHome().setActiveItem(this.addNodeForm);
    }
});
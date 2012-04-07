Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            home:           'homeview',
            nodelist:       'nodelist',
            nodeDetail:     'nodedetail'
        },
        control: {
            nodelist: {
                itemtap: 'showNodeDetail'
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
        // this.getHome().setActiveItem(this.nodeDetail);
    }
});
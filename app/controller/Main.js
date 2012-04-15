Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            home:           'homeview',
            nodelist:       'nodelist',
            nodeDetail:     'nodedetail',
            addNodeForm:    'addnodeform',
            addNodeButton:  'button[action=addNode]',
            searchByName:   'searchfield'
        },
        control: {
            nodelist: {
                itemtap: 'showNodeDetail'
            },
            addNodeButton: {
                tap: 'showAddNodeForm'
            },
            searchByName: {
                keyup: 'filterListByName',
                clearicontap: 'onSearchIconClearTap'
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
    },

    filterListByName: function(field) {
        Ext.Logger.log("Filtering list");
        //get the store and the value of the field
        console.log(Ext.getStore('Nodes'));

        var value = field.getValue(),
            store = Ext.getStore('Nodes');

        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('name').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },

    onSearchIconClearTap: function() {
        Ext.getStore('Nodes').clearFilter();
    }
});
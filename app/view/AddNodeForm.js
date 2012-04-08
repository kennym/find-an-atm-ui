/**
 * @class App.view.AddNodeForm
 * @extends Ext.Panel
 *
 * Form for adding a new node
 */
Ext.define('App.view.AddNodeForm', {
    extend: 'Ext.form.Panel',
    xtype: 'addnodeform',
    url: 'http://find-an-atm.kennymeyer.net/nodes',

    config: {
        url: 'http://find-an-atm.kennymeyer.net/nodes',
        title: "Add ATM",
        items: [
            {
                xtype: 'fieldset',
                title: 'Basic information',
                instructions: 'Please enter the information above.',
                defaults: {
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    {
                        required: true,
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name',
                        autoCapitalize: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'latitude',
                        label: 'Latitude',
                        value: this.lat,
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'longitude',
                        label: 'Longitude',
                        value: this.lon,
                        hidden: true
                    }
                ]
            },
            // {
            //     xtype: 'fieldset',
            //     title: 'Location details',
            //     defaults: {
            //         labelAlign: 'left',
            //         labelWidth: '40%'
            //     },
            //     items: [
            //
            //     ]
            // },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    { xtype: 'spacer' },
                    {
                        text: 'Save',
                        ui: 'confirm',
                        handler: function() {
                            this.up('addnodeform').submit();
                        }
                    }
                ]
            }
        ]
    }
});
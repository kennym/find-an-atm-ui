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
                    require: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name',
                        autoCapitalize: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'latitude',
                        label: 'Latitude',
                        disabled: true,
                        value: this.lat
                    },
                    {
                        xtype: 'textfield',
                        name: 'longitude',
                        label: 'Longitude',
                        disabled: true,
                        value: this.lon
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
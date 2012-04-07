/**
 * @class App.view.AddNodeForm
 * @extends Ext.Panel
 *
 * Form for adding a new node
 */
Ext.define('App.view.AddNodeForm', {
    extend: 'Ext.Panel',
    xtype: 'addnodeform',

    config: {
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
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Location details',
                defaults: {
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'latitude',
                        label: 'Latitude',
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'longitude',
                        label: 'Longitude',
                        disabled: true
                    },
                ]
            }
        ]
    }
});
/**
 * @class App.view.AddNodeForm
 * @extends Ext.Panel
 *
 * Form for adding a new node
 */

 function success(position) {
     console.log("setting coordintates");
     window.lat = position.coords.latitude;
     window.lon = position.coords.longitude;
 }
 function error() {
     console.log("Fuck");
 }

Ext.define('App.view.AddNodeForm', {
    extend: 'Ext.form.Panel',
    xtype: 'addnodeform',

    initComponent: function() {
        navigator.geolocation.getCurrentPosition(success, error);
        App.view.AddNodeForm.superclass.initComponent.call(this);
        var values = this.getValues();
        values["longitude"] = window.lon;
        values["latitude"] = window.lat;
        this.setValues(values);
    },
    config: {
        url: 'http://localhost:3000/nodes',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Add ATM',
                items: [
                    {
                        xtype: 'button',
                        html: 'Back',
                        ui: 'back',
                        handler: function(button) {
                            Ext.Viewport.getLayout().setAnimation({
                                type: 'slide',
                                direction: 'down'
                            });
                            Ext.Viewport.setActiveItem(Ext.ComponentQuery.query('homeview')[0]);
                            Ext.Viewport.getLayout().setAnimation({
                                type: 'slide',
                                direction: 'right'
                            });
                        }
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Basic information',
                instructions: 'Name of the bank. E.g.: Citibank',
                defaults: {
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    {
                        xtype: 'map',
                        useCurrentLocation: true
                    },
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
                        value: window.lat,
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'longitude',
                        label: 'Longitude',
                        value: window.lon,
                        hidden: true
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    { xtype: 'spacer' },
                    {
                        text: 'Save',
                        ui: 'confirm',
                        handler: function() {
                            this.up('addnodeform').submit({
                                success: function(result, e, opts) {
                                    console.log(result);
                                },
                                error: function(result, e, opts) {
                                    console.log(result);
                                }
                            });
                        }
                    }
                ]
            }
        ]
    }
});
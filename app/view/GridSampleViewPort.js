Ext.define('GridSample.view.GridSampleViewPort', {
    requires: ['Ext.window.Window', 'Ext.grid.Panel', 'Ext.form.FormPanel'],
    extend: 'Ext.container.Viewport',
    id: 'GridSampleView',
    initComponent: function () {
        this.items = [
            {
                padding: "20",
                height: 500,
                width: 400,
                frame: true,
                layout: 'anchor',
                defaultType: 'textfield',
                defaults: {
                    anchor: '-10',
                    labelWidth: 65
                },
                items: [{
                    xtype: 'form',
                    itemId: 'formPanel',
                    id: 'formPanel',
                    height: 450,
                    width: 400,
                    frame: true,
                    layout: 'anchor',
                    defaultType: 'textfield',
                    items: formItems,
                    buttons: [
                        {text: 'Reset', id: 'resetButton',},
                        {text: 'Submit', id: 'submitButton',}
                    ]
                }]
            }
        ];
        this.callParent(arguments);
    }
});

const formItems = [
    Ext.create('Ext.Img', {
        src: 'images/small_welcome.jpg',
    }),
    {fieldLabel: 'First name', name: 'firstName'},
    {fieldLabel: 'Middle name', name: 'middleName'},
    {fieldLabel: 'Last name', name: 'lastName'},
    {
        xtype: 'combobox',
        fieldLabel: 'position',
        name: 'position',
        queryMode: 'local',
        store: 'GridSample.store.PositionsStore',
        displayField: 'position',
        valueField: 'position',
        editable: false
    },
    {
        xtype: 'radiogroup',
        fieldLabel: 'Gender',
        name: 'gender',
        items: [
            {boxLabel: 'Male', name: 'rb', inputValue: 'Male'},
            {boxLabel: 'Female', name: 'rb', inputValue: 'Female'},
            {boxLabel: 'Others', name: 'rb', inputValue: 'Others'},
        ]
    }
];
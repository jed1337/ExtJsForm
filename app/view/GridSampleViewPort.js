const tpl = Ext.create('Ext.Template', [
        'Hello {firstName} {middleName} {lastName}!',
        ' Nice to meet you!',
        ' You are a {rb} {position}.',
        ' Please bring food from the Christmas party to the office.'
    ]
);

// Ext.define('GridSample.view.GridSampleViewPort', {
//     requires: ['Ext.window.Window', 'Ext.grid.Panel'],
//     extend: 'Ext.container.Viewport',
//     id: 'GridSampleView',
//     tpl: tpl,
//     initComponent: function () {
//         this.items = [{
//             xtype: 'window',
//             id: 'windowko',
//             height: 250,
//             width:300,
//             closeable: false,
//             autoShow:true,
//             items: [{
//                 xtype: 'container',
//                 items: [
//                     {
//                         xtype: 'grid',
//                         id: 'formPanel',
//                         columns: [
//                             {text: 'First Name', dataIndex: 'firstName'},
//                             {text: 'Last Name', dataIndex: 'lastName'},
//                             {text: 'Age', dataIndex: 'age'},
//                         ],
//                         store: 'GridSample.store.UsersStore',
//                         renderTo: Ext.getBody()
//                     },
//                     {
//                         xtype: 'button',
//                         id: 'buttonTest',
//                         name: 'buttonTest',
//                         text: 'Click mo ko Dali'
//                     }
//                 ]
//             }]
//         }];
//         this.callParent(arguments);
//     }
// });

Ext.define('GridSample.view.GridSampleViewPort', {
    requires: ['Ext.window.Window', 'Ext.grid.Panel'],
    extend: 'Ext.container.Viewport',
    id: 'GridSampleView',
    tpl: tpl,
    items: [
        Ext.create('Ext.form.FormPanel', {
            itemId: 'formPanel',
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
            items: [
                Ext.create('Ext.Img', {
                    src: 'images/small_welcome.jpg',
                }),
                {
                    fieldLabel: 'First name',
                    name: 'firstName'
                },
                {
                    fieldLabel: 'Middle name',
                    name: 'middleName'
                },
                {
                    fieldLabel: 'Last name',
                    name: 'lastName'
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Position',
                    name: 'position',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['position'],
                        data: [
                            {"position": "Programmer"},
                            {"position": "Software Engineer"},
                            {"position": "Software Analyst"}
                        ]
                    }),
                    displayField: 'position',
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
                },
            ],
            buttons: [
                {
                    text: 'Reset',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                },
                {
                    text: 'Submit',
                    handler: function () {
                        const formPanel = this.up('#formPanel');
                        const vals = formPanel.getValues();
                        const greeting = tpl.apply(vals);

                        Ext.Msg.alert('Hello!', greeting);
                    }
                }
            ]
        })]
});
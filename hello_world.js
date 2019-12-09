Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
        height: 500,
        width: 400,
        closable: false,
        title: 'Welcome!',
        icon: "images/dio_colour.jpg",
        border: false,
        layout: 'fit',
        items: formPanel
    }).show()
    // Create the combo box, attached to the states data store
});

const tpl = Ext.create('Ext.Template', [
        'Hello {firstName} {middleName} {lastName}!',
        ' Nice to meet you!',
        ' You are a {rb} {position}.',
        ' Please bring food from the Christmas party to the office.'
    ]
);

const formPanel = Ext.create('Ext.form.FormPanel', {
    itemId: 'formPanel',
    padding: "20",
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
});
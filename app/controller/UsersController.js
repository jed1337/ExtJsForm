Ext.define('GridSample.controller.UsersController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            '#buttonTest': {click: this.buttonTestClicked},
            '#resetButton': {click: this.resetButtonClicked},
            '#submitButton': {click: this.submitButtonClicked}
        })
    },
    buttonTestClicked: function () {
        const form = Ext.getCmp('formPanel').getSelectionModel();
        // alert('eow');
        // Ext.Msg.alert('!', form.getSelection()[0].data.firstName)
    },
    resetButtonClicked: function () {
        Ext.getCmp('formPanel').getForm().reset()
    },
    submitButtonClicked: function () {
        const formPanel = Ext.getCmp('formPanel');
        const vals = formPanel.getValues();
        const greeting = Ext.create('Ext.Template', [
                'Hello {firstName} {middleName} {lastName}!',
                ' Nice to meet you!',
                ' You are a {rb} {position}.',
                ' Please bring food from the Christmas party to the office.'
            ]
        ).apply(vals);

        Ext.Msg.alert('Hello!', greeting);
    }
});
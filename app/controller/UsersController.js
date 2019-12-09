Ext.define('GridSample.controller.UsersController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            '#buttonTest': {
                click: this.buttonClicked
            }
        })
    },
    buttonClicked: function () {
        const form = Ext.getCmp('formPanel').getSelectionModel();
        // alert('eow');
        // Ext.Msg.alert('!', form.getSelection()[0].data.firstName)
    }
});
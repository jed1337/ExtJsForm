Ext.application({
    name: 'GridSample',
    appFolder: './app/',
    models: ['GridSample.model.UsersModel'],
    controllers: ['GridSample.controller.UsersController'],
    stores: ['GridSample.store.UsersStore'],
    launch: function () {
        Ext.create('GridSample.view.GridSampleViewPort')
    }
});
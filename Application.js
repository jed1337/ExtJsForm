Ext.application({
    name: 'GridSample',
    appFolder: './app/',
    models: ['GridSample.model.UsersModel', 'GridSample.model.PositionsModel'],
    controllers: ['GridSample.controller.UsersController'],
    stores: ['GridSample.store.UsersStore', 'GridSample.store.PositionsStore'],
    launch: function () {
        Ext.create('GridSample.view.GridSampleViewPort')
    }
});
Ext.define('GridSample.store.UsersStore', {
    extend: 'Ext.data.Store',
    model: 'GridSample.model.UsersModel',
    data: [
        {firstName: 'Ghino', lastName: 'Punzalan', age: 24},
        {firstName: 'Christoper', lastName: 'Nicolas', age: 21},
        {firstName: 'Jose', lastName: 'Leo', age: 21},
        {firstName: 'Jesus', lastName: 'Brugada', age: 900}
    ]
});
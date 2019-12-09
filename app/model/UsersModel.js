Ext.define('GridSample.model.UsersModel', {
    extend: 'Ext.data.Model',
    fields:[
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'age', type: 'int'}
    ]
});
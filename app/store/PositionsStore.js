Ext.define('GridSample.store.PositionsStore', {
    extend: 'Ext.data.Store',
    model: 'GridSample.model.PositionsModel',
    data: [
        {position: 'Programmer'},
        {position: 'Software Engineer'},
        {position: 'Software Analyst'}
    ]
});
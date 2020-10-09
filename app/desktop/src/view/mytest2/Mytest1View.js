Ext.define('MyExtGenApp.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'mytest2',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Changed',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {text: 'Email',dataIndex: 'email',editable: true, width: 230},
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});

({
    confirma : function(component, event, helper) {
        var tst = $A.get("e.force:showToast");
        tst.setParams({
            title: '',
            message: 'Material Criado Com Sucesso!',
            type: 'success',
            duration: 4000,
            mode: 'dismissible'
        });
        tst.fire();
	},
    
    handleReset: function(cmp, event, helper) {
        cmp.find('field').forEach(function(f) {
   	    f.reset(); 
    	});
	}
})


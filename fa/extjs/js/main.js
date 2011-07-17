Ext.onReady(function() {
	Ext.QuickTips.init();

	var modelsGrid = Ext.ComponentMgr.create({
		xtype: 'modelsgrid'
	})
	
	var mainPanel = new Ext.Viewport({
		id : 'main-viewport',
		forceFit : true,
		hideMode : "offsets",
		layout : "border",
		defaults : {
			autoScroll : true
		},
		items : [{
			xtype : 'panel',
			layout : 'card',
			id : 'main-tabpanel',
			region : 'center',
			activeItem : 0,
			border : false,
			tbar:['->', Fa.UI.ModelsCombo(modelsGrid)],
			items : [modelsGrid]
		} ],
		listeners : {
			afterrender : function(component) {
				var params = document.URL.split('#');
				if (params.length > 1) {
					var token = params[1];
				}
			}

		}
	});
});

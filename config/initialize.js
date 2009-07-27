/**
 * Add site-wide settings such as BLANK_IMAGE_URL
 */

// Ext.BLANK_IMAGE_URL = 'images/default/s.gif';

ExtMVC.setup({
  name:        "MyApp",
  
  launch: function() {
    // this.menu = new GetIt.views.layout.Menu({
    //   region   : 'west',
    //   width    : 230,
    //   listeners: {
    //     scope: this,
    //     click: function(node) {
    //       var attrs = node.attributes;
    //       Ext.applyIf(attrs, {action: 'index'});
    //       this.dispatch(node.attributes);
    //     }
    //   }
    // });

    /**
     * @property mainPanel
     * @type Ext.Panel
     * A container into which views are rendered
     */
    this.mainPanel = new Ext.TabPanel({
      region: 'center',
      plain : true,
      cls   : 'mainPanel',
      
      enableTabScroll: true
    });
    
    MyApp.controllers.ApplicationController.prototype.addTo = this.mainPanel;
    
    this.viewport = new Ext.Viewport({
      layout: 'border',
      items:  [this.mainPanel]
    });
    
    ExtMVC.getController('index').index();
  }
});

Ext.onReady(Ext.QuickTips.init);
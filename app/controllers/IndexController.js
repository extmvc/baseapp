/**
 * @class MyApp.controllers.IndexController
 * @extends MyApp.controllers.ApplicationController
 * Default root controller
 */
MyApp.controllers.IndexController = Ext.extend(MyApp.controllers.ApplicationController, {
  name: 'index',
  
  /**
   * Renders the home page into the main TabPanel
   */
  index: function() {
    var view = this.render("Index");
    
    this.addTo.setActiveTab(view);
  }
});
module.exports = function(app) {

   
  // ###################################################### 
  //  EVENTS CALENDAR ROUTES AND APIS humanx.global/calendar
  // ###################################################### 

  var hackEvents = require('../controllers/hacksController.js');
  
  app.route('/api/hacks/subscribe')
      //.get(calendarEvent.list_all_events)    
      .post(hackEvents.add_new_subscriber);

 

};
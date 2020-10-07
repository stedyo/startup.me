module.exports = function(app) {

   
  // ###################################################### 
  //  EVENTS CALENDAR ROUTES AND APIS humanx.global/calendar
  // ###################################################### 

  var hackEvents = require('../controllers/hacksController.js');
  
  app.route('/api/hacks/subscribe')
    .post(hackEvents.add_new_subscriber);

  app.route('/api/hacks/getRecommends')
    .post(hackEvents.get_recommendations);

  app.route('/api/hacks/getRecommendsbyTag')
    .post(hackEvents.get_recommendations_by_tag);
     
  app.route('/api/hacks/getTagsbyCategory')
    .post(hackEvents.get_tags_by_category);
     

};
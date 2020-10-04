var User = require('../models/hacksModel.js');




// add a new subscriber
// req.body {email}
// return status code of 200 with the id of created event 
exports.add_new_subscriber = function(req, res) {

    var new_subscriber = new User(req.body);
  
    if(!new_subscriber || JSON.stringify(new_subscriber) === '{}'){   //handles null error 
      res.status(400).send({ error:true, message: 'Please provide the subscriber email' });
    } else{
  
      User.addNewSubscriber(new_subscriber, function(err, eventStatus) {
     
        if (err) {
          res.status(204).send({ error:true, message: 'couldnt insert the new subscriber' });
        } else {
          res.status(200).json(eventStatus)
        }
  
      });
    }
};
  



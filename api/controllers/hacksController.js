var Hacks = require('../models/hacksModel.js');




// add a new subscriber
// req.body {email}
// return status code of 200 with the id of created event 
exports.add_new_subscriber = function(req, res) {

    var new_subscriber = new Hacks(req.body);
  
    if(!new_subscriber || JSON.stringify(new_subscriber) === '{}'){   //handles null error 
      res.status(400).send({ error:true, message: 'Please provide the subscriber email' });
    } else{
  
      Hacks.addNewSubscriber(new_subscriber, function(err, eventStatus) {
     
        if (err) {
          res.status(204).send({ error:true, message: 'couldnt insert the new subscriber' });
        } else {
          res.status(200).json(eventStatus)
        }
  
      });
    }
};

exports.get_recommendations = function(req, res) {

  if(req.body.category === null || req.body.category === "" || req.body.language === null || req.body.language === ""){   //handles null error 
    res.status(400).send({ error:true, message: 'Please provide the category id and the language' });
  } else{

    Hacks.getRecommendations(req.body, function(err, eventStatus) {
   
      if (err) {
        res.status(204).send({ error:true, message: 'couldnt get new recommendations' });
      } else {
        res.status(200).json(eventStatus)
      }

    });
  }
};
  


exports.get_recommendations_by_tag = function(req, res) {

  if(req.body.tag === null || req.body.tag === "" || req.body.category === null || req.body.category === ""){   //handles null error 
    res.status(400).send({ error:true, message: 'Please provide the tag id and the language' });
  } else{

    Hacks.getRecommendationsbyTag(req.body, function(err, eventStatus) {
   
      if (err) {
        res.status(204).send({ error:true, message: 'couldnt get new recommendations' });
      } else {
        res.status(200).json(eventStatus)
      }

    });
  }
};

exports.get_tags_by_category = function(req, res) {

  if(req.body.category === null || req.body.category === "" || req.body.language === null || req.body.language === ""){   //handles null error 
    res.status(400).send({ error:true, message: 'Please provide the category id and the language' });
  } else{

    Hacks.getTagsbyCategory(req.body, function(err, eventStatus) {
   
      if (err) {
        res.status(204).send({ error:true, message: 'couldnt get new recommendations' });
      } else {
        res.status(200).json(eventStatus)
      }

    });
  }
};



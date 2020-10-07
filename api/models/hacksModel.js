
var Hacks = function(u){
    this.email = u.email;
};



Hacks.addNewSubscriber = function(newSubscriber, callback){

    SQLpool.getConnection()
    .then(conn => {
        conn.query("INSERT INTO subscriptions (email,active) values (?,?)", [newSubscriber.email, 1 ])          
        .then(res => {

            if(res.insertId > 0 ){
                callback(false, res.insertId);
             } else {
                callback(true, null);
             }
      
        }).catch(err => {
            if(err.errno==1062){
                callback(false, {message: 'alreadysubscribed'})
            } else {
                callback(true, null)
            }
        });

        conn.release(); //release to pool
        
    }).catch(err => {
        console.log("not connected due to error: " + err );
        callback(true, null);
    });
}

Hacks.getRecommendations = function(data, callback){

    SQLpool.getConnection()
    .then(conn => {
        conn.query(`select * 
                    from platforms 
                    where category = "${data.category.toLowerCase().trim()}"
                    and language = "${data.language.toLowerCase().trim()}"
                    order by priority asc`)          
        .then(rows => {
            
            if(rows.length > 0 ){
                callback(false, rows);
             } else {
                callback(true, null);
             }
      
        }).catch(err => {
            callback(true, null)
        });

        conn.release(); //release to pool
        
    }).catch(err => {
        console.log("not connected due to error: " + err );
        callback(true, null);
    });
}



Hacks.getRecommendationsbyTag = function(data, callback){

    SQLpool.getConnection()
    .then(conn => {
        conn.query(`select * 
                    from platforms 
                    where tag = "${data.tag.toLowerCase().trim()}" 
                    and category = "${data.category.toLowerCase().trim()}" 
                    order by priority asc`)          
        .then(rows => {
            
            if(rows.length > 0 ){
                callback(false, rows);
             } else {
                callback(true, null);
             }
      
        }).catch(err => {
            callback(true, null)
        });

        conn.release(); //release to pool
        
    }).catch(err => {
        console.log("not connected due to error: " + err );
        callback(true, null);
    });
}



Hacks.getTagsbyCategory = function(data, callback){



    SQLpool.getConnection()
    .then(conn => {
        conn.query(`select tag
                    from platforms 
                    where category = "${data.category.toLowerCase().trim()}"
                    and language = "${data.language.toLowerCase().trim()}"
                    group by tag
                    order by tag asc`)          
        .then(rows => {
            
            if(rows.length > 0 ){
                callback(false, rows);
             } else {
                callback(true, null);
             }
      
        }).catch(err => {
            callback(true, null)
        });

        conn.release(); //release to pool
        
    }).catch(err => {
        console.log("not connected due to error: " + err );
        callback(true, null);
    });
}


module.exports= Hacks;

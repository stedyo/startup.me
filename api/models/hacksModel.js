
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

Hacks.getRecommendations = function(category, callback){

    console.log(category)

    SQLpool.getConnection()
    .then(conn => {
        conn.query(`select * 
                    from platforms 
                    where category = "${category.toLowerCase().trim()}"
                    order by created_at desc`)          
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

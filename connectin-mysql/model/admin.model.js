const pool = require('../util/dbconfig');
module.exports = class Admin{
    constructor(id,username,password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    signIn(){
       return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
           if(!err){
             let sql = "select * from admin where username=? and password=?";
             con.query(sql,[this.username,this.password],(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
             });
           }
           else
             reject(err);
         });
       });  
    }
}
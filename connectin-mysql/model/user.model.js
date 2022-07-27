const pool = require('../util/dbconfig');
module.exports = class User{
    constructor(id,name,mobile,age){
        this.id = id;
        this.name = name;
        this.mobile = mobile;
        this.age = age;
    }
    insert(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
            let sql = "insert into user(name,mobile,age) values(?,?,?)";
            con.query(sql,[this.name,this.mobile,parseInt(this.age)],(err,result)=>{
              con.release(); // it will move con in pool  
              err ? reject(err) : resolve(result);
            });
          }
          else
           reject(err);
        });
      });
    }
    delete(){

    }
    update(){

    }
    getUserList(){

    }
}

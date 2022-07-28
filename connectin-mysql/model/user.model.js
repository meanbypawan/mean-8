const pool = require('../util/dbconfig');
// squalize
module.exports = class User{
    constructor(id,name,mobile,age){
        this.id = id;
        this.name = name;
        this.mobile = mobile;
        this.age = age;
    }
    static getUserList(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
            let sql = "select * from user";
            con.query(sql,(err,results)=>{
               con.release();
               err ? reject(err) : resolve(results);
               /*
               let userList =[];
               results.map(user=>{
                 let userModel = new User(user.id,user.name,user.mobile,user.age);
                 userList.push(userModel);
               });
               console.log(userList);
               */
            });
          }
          else
           reject(err);
        });
      });
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

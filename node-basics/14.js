// class & object
// customer (id,name,age)
/*
  var customer = {id:1, cname:'ABC',age:21}

  function Customer(id,name,age){
      this.id = id;
      this.name = name;
      this.age = age;
  }

  var obj =  new Customer(1,"ABC",21)
*/
// As a Model
class Customer{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

     display(){
        console.log(this.id+" "+this.name+" "+this.age);
    }
}

let obj = new Customer(1,'ABC',30);
obj.display();
// Product, User, Employee,Cart,Favorite
// save,getProductList,delete,update

module.exports = new function Product(){
    this.save = function(){
        console.log("Product Saved,,,");
    }
    this.update = function(){
        console.log("Product updated..");
    }
    this.getList = function(){
        console.log("Product List Fetched,,");
    }
    this.delete = function(){
        console.log("Product deleted...");
    }
}

/*
let obj = new Product();
module.exports = obj;
*/
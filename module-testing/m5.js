class Product{
    save(){
        console.log("product saved..");
    }
    delete(){
        console.log("Product deleted..");
    }
}

module.exports = new Product();
import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createProduct(){
      this.store.createRecord('product',{name: this.get('name'),calories:this.get('calories')}).save().then(()=>{alert("guardado")}).catch((e)=>{alert("error")}).finally(()=>{this.set('name','');
      this.set('calories','')})
    },
    updateProduct(product){
      product.save();
    },
    deleteProduct(product){
      product.destroyRecord();
    }
  }
});

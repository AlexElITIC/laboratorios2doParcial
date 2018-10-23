import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deleteMeal(meal){
      meal.destroyRecord();
    },
    createMeal(){
      this.store.createRecord('meal',{name:this.get('name')}).save().then(()=>{alert('guardado')}).finally(()=>{this.set('name','')})
    }
  }
});

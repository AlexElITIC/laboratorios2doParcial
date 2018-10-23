import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  editMeal(meal) {
      meal.save().then(() => {
        this.transitionToRoute('meals.index')
      }).catch((e) => {
        console.log(e)
      })
  }
}
});

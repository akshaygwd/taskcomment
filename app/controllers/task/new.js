import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask() {
      var title = this.get('title');
      var body = this.get('body');
      var totalTasks = this.get('model.task').get('length');
      console.log(totalTasks, 'hit');
      var newTask = this.store.createRecord('task', {
        id: totalTasks + 1,
        title: title,
        body: body
      })

      newTask.save();
      this.setProperties({
        title: '',
        body: ''
      });
      this.transitionToRoute('task');
    }
  }
});

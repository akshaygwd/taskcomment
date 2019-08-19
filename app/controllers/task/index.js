import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeTask: function (id) {
      let task = this.store.peekRecord('task', id);
      task.deleteRecord();
      task.save();
    },
  }
});

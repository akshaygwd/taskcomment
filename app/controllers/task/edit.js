import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask: function (id) {
      var title = this.get('model.title');
      var body = this.get('model.body');
      this.store.findRecord('task', id).then((task) => {
        task.set('title', title);
        task.set('decription', body);
        task.save();
      });
      this.transitionToRoute('task');
    }
  }
});

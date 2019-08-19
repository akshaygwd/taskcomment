import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addComment: function(task) {
      var commentData = this.get('comment');
      var totalComments = this.store.peekAll('comment').get('length');
      var task = this.store.peekRecord('task', task.id);
      var newComment = this.store.createRecord('comment', {
        id: totalComments + 1,
        title: commentData,
        task: task,
        taskId: task.get('id')
      })

      task.get('comments').pushObject(newComment);
      newComment.save().then(function () {
        task.save();
      });
      this.setProperties({
        title: '',
      });
    }
  }
});

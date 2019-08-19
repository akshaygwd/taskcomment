import Ember from 'ember';

export default Ember.Controller.extend({
  editComment: false,
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
    },
    editComment: function(comment) {
      comment.set('editComment', true);
    },
    acceptChanges(comment) {
      comment.set('editComment', false);
      var newComment = comment.get('title');
       if (Ember.isEmpty(newComment)) {
         this.removeComment(comment);
       } else {
         comment.save();
       }
    },
    removeComment(comment) {
      comment.deleteRecord();
      comment.save();
    }
  }
});

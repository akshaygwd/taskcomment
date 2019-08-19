import DS from 'ember-data';

var TASK =  DS.Model.extend({
  title: DS.attr("string"),
  body: DS.attr("string"),
  comments: DS.hasMany("comment"),

  allComments: Ember.computed('comments.[]', function(){
    return this.get('comments')
  })
});

TASK.reopenClass({
  FIXTURES: [{
    id: '1',
    title: "Something something Basecamp",
    body: "This is the body",
    comments: [1, 4]
  },
  {
  id: '2',
  title: "Task two",
   body: "This is the body",
  comments: [3]
  },
  {
    id: '3',
    title: "Task two",
     body: "This is the body",
    comments: [2]
  }]
});

export default TASK;

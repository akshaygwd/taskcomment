import DS from 'ember-data';

var COMMENT =  DS.Model.extend({
  title: DS.attr("string"),
  taskId: DS.attr("number"),
  tasks: DS.belongsTo('task'),

});

COMMENT.reopenClass({
  FIXTURES: [{
      id: '1',
      title: "Something something Basecamp",
      tasks: [1]
    },
    {
      id: '2',
      title: "Task two",
      comments: [3]
    },
    {
      id: '3',
      title: "Task two",
      comments: [2]
    },
    {
      id: '4',
      title: "This is the comment",
      comments: [1]
    }

  ]
});

export default COMMENT;

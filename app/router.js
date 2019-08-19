import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('task', {path: '/'}, function() {
    this.route('new');
    this.route('details', {path: '/task/:task_id'});
    this.route('edit', {path: 'task/edit/:task_id'});
  });
});

export default Router;

var g = require('dyson-generators');

canvasModule = {
  path: '/modules/:id',
  template: {
    id: function(params) {
      return params.id;
    },
    name: g.name,
    position: g.random(100),
    unlock_at: '2013-07-12T15:27:22-06:00',
    require_sequential_progress: true,
    prerequisite_module_ids: [],
    state: 'completed',
    completed_at: '2013-07-12T15:27:22-06:00'
  }
};

modules = {
  path: '/modules',
  collection: true,
  template: canvasModule.template
}

module.exports = [canvasModule, modules];
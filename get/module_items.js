var g = require('dyson-generators');

module_item = {
  path: '/module_items/:id',
  template: {
    id: function(params) {
      return params.id;
    },
    title: g.name,
    indent: g.random(2),
    position: 1,
    type: "Page",
    html_url: "https://test.instructure-test.com/courses/123/modules/items/321",
    page_url: "url-url",
    url: "https://test.instructure.com/api/v1/courses/123/pages/url-url"
  }
};

module_items = {
  path: '/module_items',
  collection: true,
  cache: false,
  size: 10,
  template: module_item.template
}

module.exports = [module_item, module_items];
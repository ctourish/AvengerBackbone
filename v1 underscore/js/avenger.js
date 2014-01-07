// js/avenger.js

// The Avenger model

var AvengerModel = Backbone.Model.extend ({

  // Default attributes
  defaults: {
    'name': 'annonymous avenger',
    'powers': 'unknown at this time',
    'picture': 'img/profilePlaceholder.png'
  }

});

// intantiate the Avenger model
var hulkModel = new AvengerModel({
  name: 'Hulk - v Backbone',
  powers: 'qwerty Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae debitis aut sit voluptas? Laudantium, delectus.',
  picture: 'img/hulkProfileBackbone.png'
});

// The AvengerView

var AvengerView = Backbone.View.extend({
  el: '#avengerContainer',
  initialize: function(){
    this.render();
  },

    // 
    tagName: 'div',
    template: _.template($('#avenger-template').html()),
    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }

});

// view instance of Avenger
var hulkView = new AvengerView({
  model: hulkModel
});
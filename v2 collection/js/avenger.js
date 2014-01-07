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

// collection

// var AvengerList = Backbone.Collection.extend({
//   model: AvengerModel
// });

// Avengers = new AvengerList;

// intantiate the Avenger model
var hulkModel = new AvengerModel({
  name: 'Hulk - v Backbone',
  powers: 'qwerty Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae debitis aut sit voluptas? Laudantium, delectus.',
  picture: 'img/companyProfilePicDell.jpg'
});

// The AvengerView

var AvengerView = Backbone.View.extend({
  el: '#avengerContainer',
  initialize: function(){
    this.render();
  },

    // 
    tagName: 'div',
    // http://stackoverflow.com/questions/9072324/using-handlebars-with-backbone
    render: function(){
      // var template = Handlebars.compile($('#avenger-template').html() || '' );
      // this.el.html( template );
      // $(this.el).html( template );
      // return this;
      
      // var source   = $("#avenger-template").html();
      // var template = Handlebars.compile(source);
      // var data = new AvengerView({model: hulkModel});
      // $("#avengerContainer").html(template(data));
    }

});

// var avengervieww = new AvengerView({ el: $'#avenger-template')});
var avengerview = new AvengerView();

// view instance of Avenger
var hulkView = new AvengerView({ 
  model: hulkModel
});
Blogger.PostsController = Ember.ArrayController.extend({
  action: {
    sortByTitle: function(){
      this.set('sortProperties', ['title']);
    }
  }
});

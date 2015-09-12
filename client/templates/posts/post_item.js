Template.postItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  },
  downvotedClass: function() {
    var userId = Meteor.userId();
    if(userId && !_.include(this.downvoters, userId)) {
      return 'downvotable';
    } else {
      return 'disabled';
    }
  },
  upvotes: function() {
    return _.size(this.upvoters);
  },
  downvotes: function() {
    return _.size(this.downvoters);
  },
  isLoggedIn: function() {
    var users = Meteor.presences.find().fetch(),
        userIds = [];

    _.each(users, function(user) {
      userIds.push(user.userId);
    });

    return _.contains(userIds, this.userId);
  }
});

Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  },
  'click .downvotable': function(e) {
    e.preventDefault();
    Meteor.call('downvote', this._id);
  }
});
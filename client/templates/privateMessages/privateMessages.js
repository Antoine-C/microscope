Session.setDefault('sent', 1);

Template.privateMessages.helpers({
  sent: function() {
    return 'Sent (' +  PrivateMessages.find({userId: Meteor.userId()}).count() + ')';
  },
  received: function() {
    return 'Received (' + PrivateMessages.find({from: Meteor.userId()}).count() + ')';
  },
  messages: function() {
    return Session.get('sent') ? PrivateMessages.find({userId: Meteor.userId()}) : 
                                 PrivateMessages.find({from: Meteor.userId()});
  }
});

Template.privateMessages.events({
  'click .list a': function (event) {
    event.preventDefault();
    Session.set('sent', Number(event.currentTarget.className === 'sent'));
  }
});
Template.privateMessage.helpers({
  title: function () {
    return PrivateMessages.findOne(this._id).title;
  }
});
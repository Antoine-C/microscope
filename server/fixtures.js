// Fixture data

// create users
var tom = null,
    sacha = null,
    paul = null,
    antoine = null;

if(Meteor.users.find().count() === 0) {

  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });

  tom = Meteor.users.findOne(tomId);

  sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });

  sacha = Meteor.users.findOne(sachaId);

  var paulId = Accounts.createUser({
    username: 'paul', 
    password: 'paul!!'
  });

  paul = Meteor.users.findOne(paulId);

  var antoineId = Accounts.createUser({
    username: 'antoine', 
    password: 'antoine!'
  });

  antoine = Meteor.users.findOne(antoineId);

}

// Private messages

if(PrivateMessages.find().count() === 0) {

  PrivateMessages.insert({
    title: 'Have you seen my comment ?',
    userId: antoine._id,
    from: paul._id,
    message: 'Hey man, just wanted to know if you saw my',
    read: false
  });

  PrivateMessages.insert({
    title: 'Another PM',
    userId: antoine._id,
    from: paul._id,
    message: 'Hey man, we dem boyz',
    read: false
  });

  PrivateMessages.insert({
    title: 'I sent this one',
    userId: paul._id,
    from: antoine._id,
    message: ':))))))',
    read: false
  });

  PrivateMessages.insert({
    title: 'I sent this one too',
    userId: paul._id,
    from: antoine._id,
    message: 'yep',
    read: false
  });

  PrivateMessages.insert({
    title: 'And this one',
    userId: paul._id,
    from: antoine._id,
    message: 'last one',
    read: false
  });
}


if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // Comments and all
  
  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    downvoters: [],
    votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });
  
  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    downvoters: [],
    votes: 0
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    downvoters: [],
    votes: 0
  });
  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [],
      downvoters: [],
      votes: 0
    });
  }
}
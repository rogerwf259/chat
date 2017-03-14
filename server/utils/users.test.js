const {Users} = require('./users');
const expect = require('expect');

describe('User mehtods', () => {
  var users;
  beforeEach('Users', () => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node'
    }, {
      id: '2',
      name: 'JEn',
      room: 'React'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node'
    }]
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Roger',
      room: 'Node'
    };
    var test = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
    var test = users.getUserList('Node');
    console.log(test);
  });

  it('Should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find a user', () => {
    var user = users.getUser('3');
    expect(user).toInclude({
      id: '3',
      name: 'Julie',
      room: 'Node'
    });
  });

  it('Should not find user', () => {
    var id = '99';
    var user = users.getUser(id);
    expect(user).toNotExist();
  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('Should return names for react course', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['JEn']);
  });


});

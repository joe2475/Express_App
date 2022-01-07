const uuid = require('uuid');
const User = function(name, age)
{
    this.name = name;
    this.age = age;
    this.id = uuid.v4();

}

module.exports = User;
var Users = /** @class */ (function () {
    function Users(id, name, lastname, email, status) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status;
    }
    Users.prototype.addUser = function (id) {
        console.log('User added: #' + id);
        return id;
    };
    Users.prototype.editUser = function (id) {
        console.log('User edited: #' + id);
        return id;
    };
    Users.prototype.deleteUser = function (id) {
        console.log('User deleted: #' + id);
        return id;
    };
    return Users;
}());
var user = new Users(1, 'Thiergui', 'Nopinto', 'thiergui@rmail.com', true);
console.log(user);
user.addUser(1);
user.editUser(1);
user.deleteUser(1);

var logIn = /** @class */ (function () {
    function logIn(email, password) {
        this.email = email;
        this.password = password;
    }
    logIn.prototype.admin = function (email, pass) {
        if (email === this.email && pass === this.password) {
            return true;
        }
        else {
            return false;
        }
    };
    logIn.prototype.user = function () {
        return false;
    };
    return logIn;
}());
var login = new logIn('user@email.com', 'pass123');
var adminLogin = login.admin('user@email.com', 'pass123');
console.log(adminLogin);

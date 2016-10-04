var data = function () {

    // Users

    function register(user) {
        var promise = new Promise(function (resolve, reject) {
            var url = 'api/users';

            var reqUser = {
              username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };
            $.ajax(url, {
               method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function (res) {
                    resolve(res);
                }
            });
        });
        return promise;
    }
    
    function login(user) {
        var promise = new Promise(function (resolve, reject) {
            var url = 'api/users/auth';

            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };
            $.ajax(url, {
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function (res) {
                    resolve(res);
                }
            });
        });
        return promise;
    }

    return {
        users: {
            register: register,
            login: login
        },
        todos: {
            get: todosGet
        }
    };
}();
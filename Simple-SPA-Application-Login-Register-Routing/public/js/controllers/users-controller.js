var usersController = function () {

    function login(context) {
        
    }
    
    function register(context) {
        templates.get('register')
            .then(function (template) {
                context.$element().html(template());
                // attach events

                $('#btn-register').on('click', function () {
                    var user = {
                        username: $('#tb-username').val(),
                        password: $('#tb-password').val()
                    };
                    data.users.register(user)
                        .then(function () {
                            console.log('User reg!');
                        });
                });

                $('#btn-login').on('click', function () {
                    var user = {
                        username: $('#tb-username').val(),
                        password: $('#tb-password').val()
                    };
                    data.users.login(user)
                        .then(function () {
                            toastr.success('User logged in!');
                            context.redirect('#/');
                        });
                });
            });
    }

    return {
        register: register,
        login: login
    };
}();
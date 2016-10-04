(function () {
    var sammyApp = Sammy('#content', function () {
        this.get('#/', function () {
            this.redirect('#/home')
        });
        this.get('#/home', homeController.all);
        this.get('#/login', usersController.login);
        this.get('#/register', usersController.register);
    });

    $(function () {
        sammyApp.run('#/');
    });
}());
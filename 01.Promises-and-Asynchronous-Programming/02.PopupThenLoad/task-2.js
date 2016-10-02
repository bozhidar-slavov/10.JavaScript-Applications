(function () {
    const milisecondsBeforeRedirect = 2000;

    let box = document.getElementById('popup');

    function timeout() {
        let promise = new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve({});
            }, milisecondsBeforeRedirect);
        });

        return promise;
    }

    let button = document.getElementById('btn');

    button.addEventListener('click', event => {
        timeout()
            .then(success => {
                window.location = "https://google.com/";
            });
    });
}());
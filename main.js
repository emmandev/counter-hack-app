(function () {
    var counter = document.getElementById('counter');

    document.querySelectorAll('input[type="button"]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            if (value === 'Increment') {
                counter.value = (+ counter.value) + 1;
            }
            else if (value == 'Decrement') {
                counter.value = (+ counter.value) - 1;
            }
        });
    });
})();
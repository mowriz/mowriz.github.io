var moritzlimbach = new Object({

    initLoad: function () {
        $('.portrait').tilt({
            glare: true,
            maxGlare: .7
        })
    },

});

var ml = moritzlimbach;

$(window).on('load', function () {
    ml.initLoad();
});

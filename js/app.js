document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
    }


    ///////////////////change tabbar color//////////////////
    $("#tabbar1").click(function () {
        $(this).attr("style", "background-color: rgb(173, 232, 105);");
        $("#tabbar2").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar3").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar4").attr("style", "background-color: rgb(255, 163, 26);");
        $("#title").empty();
        $("#title").append("Resturant Food");
    });
    $("#tabbar2").click(function () {
        $(this).attr("style", "background-color: rgb(173, 232, 105);");
        $("#tabbar1").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar3").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar4").attr("style", "background-color: rgb(255, 163, 26);");
        $("#title").empty();
        $("#title").append("Resturant List");
    });
    $("#tabbar3").click(function () {
        $(this).attr("style", "background-color: rgb(173, 232, 105);");
        $("#tabbar1").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar2").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar4").attr("style", "background-color: rgb(255, 163, 26);");
        $("#title").empty();
        $("#title").append("Food Category");
    });
    $("#tabbar4").click(function () {
        $(this).attr("style", "background-color: rgb(173, 232, 105);");
        $("#tabbar1").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar2").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar3").attr("style", "background-color: rgb(255, 163, 26);");
        $("#title").empty();
        $("#title").append("Basket");
    });
    ///////////////////end of change tabbar color//////////////////

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#regisbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regis.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
        });
    }

    $("#backbtn").click(function () {
        document.querySelector('ons-navigator').resetToPage('splitter.html');
    });

    if (page.id === 'tab1') {
        //Code for Tab 1
        $("#btn1").click(function () {
            alert("Hello");
        });
    }

});

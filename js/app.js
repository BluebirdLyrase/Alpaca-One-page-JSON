


document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);
    if (page.id === "tabbar") {
        $("#menubtn").click(function () {
            var menu = docment.getElementByID("menubtn");
            cosole.log(menu);
            menu.open;
        });
    }



    if (page.id === "tab1") {
        $("#btn1").click(function () {
            alert("Haasasasasr asdasdadaasasas.");
        });
    }
    if (page.id === "tab2") {

    }

    if (page.id === "sidemenu") {
        $("#homebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html').then(menu.close.bind(menu));
            console.log("home");

        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html').then(menu.close.bind(menu));
            console.log(";pgon");

        });
    }



});
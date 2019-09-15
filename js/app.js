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

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#regisbtn").click(function () {
            console.log('regisbtn pressed');
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regis.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            console.log('loginbtn pressed');
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
        });

    }

    ///////////////////change tabbar color//////////////////
    $("#tabbar1").click(function () {
        $(this).attr("style", "background-color: rgb(173, 232, 105);");
        $("#tabbar2").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar3").attr("style", "background-color: rgb(255, 163, 26);");
        $("#tabbar4").attr("style", "background-color: rgb(255, 163, 26);");
        $("#title").empty();
        $("#title").append("Popular");
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



    $("#backbtn").click(function () {
        document.querySelector('ons-navigator').resetToPage('splitter.html');
    });

    if (page.id === 'tab1') {
        //Code for Tab 1
        $("#btn1").click(function () {
            alert("Hello");
        });
    }

    $("#signinbtn").click(function () {
        console.log("signinbtn pressed");
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
      
        if (username === 'Admin' && password === '123') {
          document.querySelector('ons-navigator').resetToPage('splitter.html');
        } else {
          ons.notification.alert('Incorrect username or password.');
        }

    });

    $("#facebookbtn").click(function () {
        console.log("facebookbtn pressed");
        document.querySelector('ons-navigator').resetToPage('splitter.html');
    });

    $("#googlebtn").click(function () {
        console.log("googlebtn pressed");
        document.querySelector('ons-navigator').resetToPage('splitter.html');
    });

    $("#regisbtn2").click(function () {
        console.log('regisbtn pressed');
        content.load('regis.html')
    });

    $("#regisNsigninbtn").click(function () {
        console.log("signinbtn pressed");
        document.querySelector('ons-navigator').resetToPage('splitter.html');
    });

/////////////////////Append Resturant Card////////////////////////////////////
    if (page.id === "Resturant") {
        $.get("js/data.json", function (data, status) {
            for (var index in data) {
                var Res = data[index];
                var Rescard = '<ons-card style="height : auto; margin-top:0px;" onclick="setID(`'+index+'`)"><ons-row>';
                Rescard += '<ons-col width="25%"><img src=' + Res.img + ' alt="Onsen UI"style="width: 65px; height :55px;"></ons-col>';
                Rescard += '<ons-col width="75%">';
                Rescard += '<div style="font-size: 17px; white-space: nowrap;">&nbsp;&nbsp;<b>' + Res.ResturantName + '</b></div>';
                Rescard += '<div style="color:grey">&nbsp;&nbsp;&nbsp;Distance : '+Res.Distance+'</div>';
                Rescard += '<ons-row>';
                Rescard += '<ons-col></ons-col>'; //for starrate
                Rescard += '<ons-col width="25%"  style="text-align: right ;color:green;" ><b>'+Res.Status+'</b></ons-col>';
                Rescard += '</ons-row></ons-col></ons-row></ons-card>'
                console.log(Rescard);
                $('#test').append(Rescard);
            }
        });
    }
});
///////////////////////End of Append Resturant Card///////////////////////////////////////
function setID(ID){
    localStorage.setItem("selected",ID);
    console.log(ID);
}




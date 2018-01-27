function helpui(){
    var ui = document.getElementsByTagName("body");
    for (var i = 0; i < ui.length; i++){
        ui[i].innerHTML = "<div class='ym-grid' style='border: 1px solid #208193; padding: 25px;'><h2 style='color: #208193;'>TF2Center AdBlock</h2><p>Looks like that our extension is not working. Try to go back to the tf2center.com page. If you still get redirected here, then the TF2Center team updated their anti adblocker. Just inform us on <a href='https://github.com/cancerpubs/tf2center-AdBlock/issues'>github</a> so we can make the extension work again.</p></div><p style='color: #208193;margin-top: 0px;'>This is a notification from the TF2center AdBlock extention</p>" + ui[i].innerHTML;
    }
}
helpui();
console.log("Oh this shouldn't be happening.");
console.log("Try to go back to the tf2center.com page. If you still get redirected here, then the TF2Center team updated their anti adblocker. Just inform us on github (https://github.com/cancerpubs/tf2center-AdBlock/issues) so we can make the extension work again.");
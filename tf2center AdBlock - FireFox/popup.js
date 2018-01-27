function removepopup() {
    var background = document.getElementById("tf2c_adblock_popup_background");
    fade(background);
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.25;
    }, 50);
}
function popup() {
    var mainContent = document.getElementsByTagName("html")[0];
    
    mainContent.style.margin = "auto";
    
    var popup_background = document.createElement("div");
    popup_background.id = "tf2c_adblock_popup_background";
    popup_background.style.position = "fixed";
    popup_background.style.overflow = "hidden";
    popup_background.style.zIndex = "1001";
    popup_background.style.background = "rgba(0,0,0,0.90)";
    popup_background.style.left = "0";
    popup_background.style.right = "0";
    popup_background.style.top = "0";
    popup_background.style.width = "100%";
    popup_background.style.height = "100%";
    
    var popup_content = document.createElement("div");
    popup_content.id = "tf2c_adblock_popup_content";
    popup_content.style.textAlign = "center";
    popup_content.style.position = "relative";
    popup_content.style.zIndex = "1002";
    popup_content.style.top = "40%";
    popup_content.style.width = "250px";
    popup_content.style.height = "200px";
    popup_content.style.padding = "100px 25px 25px 25px";
    popup_content.style.paddingTop = "75px";
    popup_content.style.borderRadius = "100%";
    popup_content.style.background = "black";
    popup_content.style.border = "2px Dashed";
    popup_content.style.borderColor = "white";
    popup_content.style.margin = "auto";
    
    var icon = document.createElement("img");
    // let the website load the extention image
    icon.src = browser.extension.getURL('128.png');
    icon.style.width = "64px";
    
    var text = document.createElement("p");
    text.style.color = "white";
    text.innerText = "removing ads...";
    
    var title = document.createElement("h2");
    title.style.color = "white";
    title.innerText = "TF2Center Adblock";
    
    var button = document.createElement("p");
    button.innerText = "hide this";
    button.style.cursor = "pointer";
    button.onclick = function(){
        removepopup();
    };
    button.style.color = "rgba(255,255,255,0.25)";
    button.style.marginTop = "15px";
    
    popup_content.appendChild(icon);
    popup_content.appendChild(title);
    popup_content.appendChild(text);
    popup_content.appendChild(button);
    
    popup_background.appendChild(popup_content);
    mainContent.insertAdjacentElement('afterbegin', popup_background);
    
}
function check_state(){
    setTimeout(function(){check_ad();}, 1000);
}
function check_ad(){
    var ads = [document.getElementsByClassName("_containerHor"), document.getElementsByClassName("_containerVer"), document.getElementsByClassName("_containerVerRight")];
    for (var i = 0; i < ads.length; i++) {
        if(ads[i][0] != null){
            if(ads[i][0].style.display == "none"){
                removed_ads = true;
            }else{
                removed_ads = false;
                break;
            }
        }
    }
    if(removed_ads){
        removepopup();
    }
}
var removed_ads = false;
popup();
check_state();
window.onload = function() {
    removepopup();
}
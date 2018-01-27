function rmads() {
    var scripts = document.getElementsByTagName("script");
    var link = document.getElementsByTagName("link");
    var scripts_length = 0;
    var links_length = 0;
    for(var i = 0; i < scripts.length; i++){
        var source = scripts[i].src;
        if(source.search("google") != -1){
            scripts[i].parentElement.removeChild(scripts[i]);
            scripts_length += 1;
        }
    }
    for(var i = 0; i < link.length; i++){
        var href = link[i].href;
        if(href.search("google") != -1){
            link[i].parentElement.removeChild(link[i]);
            links_length += 1;
        }
    }
    console.log("[TF2Center Adblock] removed "+scripts_length+" Google script(s) and "+links_length+" Google link(s)");
   var elements=document.getElementsByTagName("iframe");
    var length = elements.length;
   while(elements.length > 0){
      elements[0].style.display="none";
      elements[0].parentNode.removeChild(elements[0]);
   }
   console.log("[TF2Center Adblock] removed "+length+" Google AdSense iframe(s)");
   var ads = [document.getElementsByClassName("_containerHor"), document.getElementsByClassName("_containerVer"), document.getElementsByClassName("_containerVerRight")];
    var length = ads.length;
   for (var i = 0; i < ads.length; i++) {
      if(ads[i][0] !== undefined){
         ads[i][0].style.display="none";
      }
   }
    console.log("[TF2Center Adblock] removed "+length+" Ad Banner(s)");
}
function addui(){
   var ui = document.getElementsByClassName("freemiumContainer");
   for (var i = 0; i < ui.length; i++) {
      ui[i].innerHTML = ui[i].innerHTML + "<div class='ym-grid' style='border: 1px solid #208193; padding: 25px;'><h2>AdBlock</h2><div class='freemiumProgress'><div class='meter ym-g1220-12 ym-gl omega'><div class='progress' style='width: 100%; border-color: #5c7a5a; background-color: #5c7a5a; transition: width 1s ease;'></div></div></div><div class='freemiumStatus'><div>100%</div><div><span>ACTIVATED</span></div></div><img style='width: 120px; position: absolute; margin-left: 12px; margin-top: -25px;' src='/assets/images/achievements/dr_doom_1.png'></div><p style='color: #208193'>This is a notification from the TF2center AdBlock extention</p>";
   }
}

rmads();
addui();
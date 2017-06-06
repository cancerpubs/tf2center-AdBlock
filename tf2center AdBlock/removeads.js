function rmads() {
   var elements=document.getElementsByTagName("iframe");
   console.log("Removing Google AdSense iframes...");
   while(elements.length > 0){
      elements[0].style.display="none";
      elements[0].parentNode.removeChild(elements[0]);
   }
   console.log("removed Google AdSense iframes.");
   var ads = [document.getElementsByClassName("_containerHor"), document.getElementsByClassName("_containerVer"), document.getElementsByClassName("_containerVerRight")];
   for (var i = 0; i < ads.length; i++) {
      if(ads[i][0] !== undefined){
         console.log("Banner ("+i+") found:");
         console.log(ads[i]);
         ads[i][0].style.display="none";
         console.log("removed ad banner (" + ads[i][0] + ")");
      }
   }
}
function addui(){
   var ui = document.getElementsByClassName("freemiumContainer");
   for (var i = 0; i < ui.length; i++) {
      ui[i].innerHTML = ui[i].innerHTML + "<div class='ym-grid' style='border: 1px solid #208193; padding: 25px;'><h2>AdBlock</h2><div class='freemiumProgress'><div class='meter ym-g1220-12 ym-gl omega'><div class='progress' style='width: 100%; border-color: #5c7a5a; background-color: #5c7a5a; transition: width 1s ease;'></div></div></div><div class='freemiumStatus'><div>100%</div><div><span>ACTIVATED</span></div></div><img style='width: 120px; position: absolute; margin-left: 12px; margin-top: -25px;' src='/assets/images/achievements/dr_doom_1.png'></div><p style='color: #208193'>This is a notification from the TF2center AdBlock extention</p>";
   }
}
console.log("Loading TF2 Center AdBlock...");
rmads();
addui();
console.log("TF2 Center AdBlock finished.");
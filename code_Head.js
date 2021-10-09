//Created by Aurange

"use strict";

window.onload = function(){
  if(location.href.indexOf("?") !== -1){
    location.href.split("?")[1].split("&").forEach(e => {
      e = e.split("=");

      if(e.length > 1 && e[1].length > 0){
        switch(e[0]){
          case "start":
            if(/^\d{4}-\d{2}-\d{2}$/.test(e[1])){
              let t = e[1].split("-");

              if(t[1] > 0 && t[1] < 13 && t[2] > 0 && t[2] < 31) document.getElementById("start").value = e[1];
            }
            break;
          case "count":
            if(parseInt(e[1]) > 1) document.getElementById("count").value = e[1];
            break;
          case "delay":
            if(!isNaN(e[1])) document.getElementById("delay").value = e[1];
            break;
        }
      }
    });

    performAction();
  }
};
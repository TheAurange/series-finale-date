//Created by Aurange

"use strict";

function performAction(inputElem, get){
  let startDate = document.getElementById("start").value, episodeCount = document.getElementById("count").value, delayCount = document.getElementById("delay").value, remaining;

  if(delayCount !== "1") document.getElementById("pluralizer").innerText = "s";
  else document.getElementById("pluralizer").innerText = "";

  if(startDate.length > 0 && episodeCount.length > 0 && delayCount.length > 0){
    startDate = startDate.split("-");
    startDate = new Date(startDate[0] + ", " + startDate[1] + ", " + startDate[2]);
    startDate.setDate(startDate.getDate() + (((parseInt(episodeCount) - 1) + parseInt(delayCount)) * 7));

    if((new Date() - startDate) / 86400000 >= 0) remaining = " has ended.";
    else if(Math.abs(new Date() - startDate) / 604800000 > episodeCount) remaining = episodeCount + " Episodes Remaining";
    else if(Math.abs(new Date() - startDate) / 604800000 > 1) remaining = Math.ceil(Math.abs(new Date() - startDate) / 604800000) + " Episodes Remaining";
    else remaining = "1 Episode Remaining";

    document.getElementById("output").innerText = (remaining !== " has ended.") ? " ends on " + (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear() + ". (" + remaining + ")" : remaining;
  }

  if(inputElem !== undefined) inputElem.blur();
  else if(get) document.getElementById("input").innerText = "This series ";
}

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

    performAction(undefined, true);
  }
};

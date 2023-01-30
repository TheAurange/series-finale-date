//Created by Aurange

"use strict";

function performAction(caller){
  let startDate = new Date(document.querySelector("#start").value),
      episodeCount = Number(document.querySelector("#count").value),
      delayCount = Number(document.querySelector("#delay").value),
      pluralizer = document.querySelector("#pluralizer"),
      remaining;

  if(delayCount !== 1) pluralizer.innerText = "s";
  else pluralizer.innerText = "";

  if(!isNaN(startDate) && !isNaN(episodeCount) && !isNaN(delayCount)){
    let difference;

    startDate.setDate(startDate.getDate() + 1 + (((episodeCount - 1) + delayCount) * 7));

    difference = new Date() - startDate;

    if(difference / 86400000 >= 0) remaining = " has ended.";
    else if(Math.abs(difference) / 604800000 > episodeCount) remaining = episodeCount + " Episodes Remaining";
    else if(Math.abs(difference) / 604800000 > 1) remaining = Math.ceil(Math.abs(difference) / 604800000) + " Episodes Remaining";
    else remaining = "1 Episode Remaining";

    document.getElementById("output").innerText = (remaining !== " has ended.") ? " ends on " + (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear() + ". (" + remaining + ")" : remaining;
  }
  
  if(caller !== undefined) caller.blur();
}

window.onload = function(){
  if(location.href.indexOf("?") !== -1 && location.href.indexOf("start") !== -1 && location.href.indexOf("count") !== -1){
    let delay = document.querySelector("#delay");

    location.href.split("?")[1].split("&").forEach(e => {
      e = e.split("=");

      if(e.length > 1 && e[1].length > 0){
        switch(e[0]){
          case "start":
            if(/^\d{4}-\d{2}-\d{2}$/.test(e[1])){
              let t = e[1].split("-");

              if(t[1] > 0 && t[1] < 13 && t[2] > 0 && t[2] < 31) document.querySelector("#start").value = e[1];
            }

            break;

          case "count":
            if(parseInt(e[1]) > 1) document.querySelector("#count").value = e[1];

            break;

          case "delay":
            if(!isNaN(e[1])) delay.value = e[1];
            else delay.value = 0;

            break;
        }
      }
    });

    if(location.href.indexOf("delay") === -1) delay.value = 0;

    performAction();
  }
};

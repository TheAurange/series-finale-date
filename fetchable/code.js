//Created by Aurange

"use strict";

function performAction(inputElem){
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
}

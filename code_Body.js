//Created by Aurange

"use strict";

function performAction(inputElem){
  let startDate = document.getElementById("start").value, episodeCount = document.getElementById("count").value, delayCount = document.getElementById("delay").value, remaining;

  if(startDate.length > 0 && episodeCount.length > 0 && delayCount.length > 0){
    startDate = startDate.split("-");
    startDate = new Date(startDate[0] + ", " + startDate[1] + ", " + startDate[2]);
    startDate.setDate(startDate.getDate() + (((parseInt(episodeCount) - 1) + parseInt(delayCount)) * 7));

    if(Math.round((new Date() - startDate) / 86400000) >= 0) remaining = "Ended";
    else if(Math.round(Math.abs(new Date() - startDate) / 604800000) > 1) remaining = Math.round(Math.abs(new Date() - startDate) / 604800000) + " Episodes Remaining";
    else remaining = "1 Episode Remaining";

    document.getElementById("output").innerText = " ends on " + (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear() + ". (" + remaining + ")";
  }

  console.log(inputElem);
  inputElem.blur();
}

//Created by Aurange

"use strict";

function performAction(inputElem){
  let startDate = document.getElementById("input").value, episodeCount = document.getElementById("input2").value, delayCount = document.getElementById("input3").value, remaining;

  if(startDate.length > 0 && episodeCount.length > 0 && delayCount.length > 0){
    startDate = startDate.split("-");
    startDate = new Date(startDate[0] + ", " + startDate[1] + ", " + startDate[2]);
    startDate.setDate(startDate.getDate() + (((episodeCount - 1) + delayCount) * 7));

    if(Math.round((new Date() - startDate) / 86400000) >= 0) remaining = "Ended";
    else if(Math.round(Math.abs(new Date() - startDate) / 604800000) > 1) remaining = Math.round(Math.abs(new Date() - startDate) / 604800000) + " Episodes Remaining";
    else remaining = "1 Episode Remaining";

    document.getElementById("output").innerText = " ends on " + (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear() + ". (" + remaining + ")";
  }
  inputElem.blur();
}

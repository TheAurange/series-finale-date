//Created by Aurange

"use strict";

function performAction(inputElem){
  let startDate = document.getElementById("input").value;
  let episodeCount = document.getElementById("input2").value;
  if(startDate.length > 0 && episodeCount.length > 0){
    startDate = startDate.split("-");
    startDate = new Date(startDate[0] + ", " + startDate[1] + ", " + startDate[2]);
    startDate.setDate(startDate.getDate() + ((episodeCount - 1) * 7));
    document.getElementById("output").innerText = " ends on " + (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear() + "( " + "[Remaining Days Here]" + ").";
  }
  inputElem.blur();
}

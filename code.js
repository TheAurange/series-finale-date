//Created by Aurange

function performAction(){
  var startDate = document.getElementById("input").value;
  if(startDate.length > 0){
    startDate = startDate.split("-");
    startDate = new Date(startDate[0] + ", " + parseInt(startDate[1]) + ", " + startDate[2]);
    var episodeCount = document.getElementById("input2").value;
    document.getElementById("output").innerText = " ends on " + startDate.setDate(startDate.getDate() + ((episodeCount - 1) * 7)); + ".";
  }
  this.blur();
}

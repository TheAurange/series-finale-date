//Created by Aurange

Date.prototype.isLeapYear = function() {
  var curYr = this.getFullYear();
  if((curYr & 3) != 0) return false;
  return ((curYr % 100) != 0 || (curYr % 400) == 0);
};

Date.prototype.getDayOfYear = function() {
  var monsToDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var curMon = this.getMonth();
  var curDay = this.getDate();
  var curDayOfYear = monsToDays[curMon] + curDay;
  if(curMon > 1 && this.isLeapYear()) curDayOfYear++;
  return curDayOfYear;
};

function dayOfYearToDateString(dayOfYear){
  var curDate = new Date();
  var curYr = curDate.getFullYear();
  var monsToDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var mon;
  for(var i = 0; i < monsToDays.length; i++){
    if(monsToDays[i] >= dayOfYear){
      mon = i - 1;
      break;
    }
  }
  return (mon + 1) + "/" + (dayOfYear - monsToDays[mon]) + "/" + curYr;
}

function seriesFinaleDate(startDateAsDayOfYear, numOfEps){
  return dayOfYearToDateString(startDateAsDayOfYear + ((numOfEps - 1) * 7));
}

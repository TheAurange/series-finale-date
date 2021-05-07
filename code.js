//Created by Aurange

/* Date.prototype.isLeapYear = function() {
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
}; */

export function formatSeconds (value) {
  var theTime = parseInt(value) // 秒
  var theTime1 = 0 // 分钟
  var theTime2 = 0 // 小时
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60)
    theTime = parseInt(theTime % 60)
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60)
      theTime1 = parseInt(theTime1 % 60)
    }
  }
  var result = ''
  if (theTime1 > 0) {
    result = '' + parseInt(theTime1) + '分钟' + result
  } else {
    result = '1分钟' + result
  }
  if (theTime2 > 0) {
    result = '' + parseInt(theTime2) + '小时' + result
  } else {
    result = '0小时' + result
  }
  return result
};
export function dateFormat (mill) {
  var time = new Date(mill)
  var month = addZero(time.getMonth() + 1)
  var date = addZero(time.getDate())
  var hour = addZero(time.getHours())
  var minute = addZero(time.getMinutes())
  return month + '-' + date + ' ' + hour + ':' + minute
};
function addZero (num) {
  if (num <= 9) {
    return '0' + num
  } else {
    return num
  }
};

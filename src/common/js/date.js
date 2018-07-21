export function formatDate (value) {
  // console.log(data, fmt)
  // if (/(y+)/.test(fmt)) {
  //   fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  // }
  // let o = {
  //   'M+': date.getMonth() + 1,
  //   'd+': date.getDate(),
  //   'h+': date.getHours(),
  //   'm+': date.getMinutes(),
  //   's+': date.getSeconds()
  // }
  // for (let k in o) {
  //   if (new RegExp(`(${k}`).test(fmt)) {
  //     let str = o[k] + ''
  //     fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
  //   }
  // }
  // return fmt
  let year = value.getFullYear()
  let month = padDate(value.getMonth()+1)
  let day = padDate(value.getDate())
  let hour = padDate(value.getHours())
  let minutes = padDate(value.getMinutes())
  let seconds = padDate(value.getSeconds())
  return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds
}
function padDate(va){
  va=va<10?'0'+va:va;
  return va
}
// function padLeftZero (str) {
//   return ('00' + str).substr(str.length)
// }

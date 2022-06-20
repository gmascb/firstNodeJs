exports.sum = (a,b) => a+b;

exports.showTime = () => {
  var today = new Date()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(`${time}`)
}
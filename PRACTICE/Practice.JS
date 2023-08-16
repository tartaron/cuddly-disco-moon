let num=0;
function showTime(){
    console.log(`${num++}seconds after start`)
    if(num>5)
    clearInterval(tId)
}
const tId=setInterval(showTime,1000)

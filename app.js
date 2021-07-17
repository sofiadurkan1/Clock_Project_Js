setInterval(setClock,1000)
function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes() / 60);
    const hoursRatio = (minutesRatio + currentDate.getHours()/ 12);

}
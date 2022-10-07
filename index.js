
const addCero = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
};
setInterval(() => {
    let date = new Date();
    document.getElementById('date').innerHTML = addCero(date.getHours()) + ':' + addCero(date.getMinutes()) + ':' + addCero(date.getSeconds());
}, 1000);
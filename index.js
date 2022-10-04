
setInterval(() => {
    let date = new Date();
    document.getElementById('date').innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}, 1000);
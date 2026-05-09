setInterval(showTime, 1000);

function showTime() {
    const d = new Date();

    let  h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');

    const period = h <= 12 ? 'AM' : 'PM';

    h = h % 12 || 12;
    h = String(h).padStart(2, '0');

    document.getElementById("clock").innerHTML = `${h}:${m}:${s} ${period}`;
}
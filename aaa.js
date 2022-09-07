let datas = ['weatherStatus600', 'weatherStatus1200', 'weatherStatus1800', 'weatherStatus2200'];
const icons = document.querySelector('.today-icons');

for (const d of datas) {
    const icon = document.createElement('object');
    icon.className = 'weather-icon col col-3';
    icon.type = 'image/svg+xml';
    icon.data = `${this.pickIcon(d)}`;
    icons.appendChild(icon);
}
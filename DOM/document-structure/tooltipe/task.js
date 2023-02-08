tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltipDiv = document.createElement('div');
tooltipDiv.className = 'tooltip';

for (let tooltip of tooltips) {
  tooltip.addEventListener('click', (event) => {
    if (event.target.nextSibling.className == 'tooltip tooltip_active') {
      tooltipDiv.classList.toggle('tooltip_active');
    }else {
      tooltipDiv.textContent = tooltip.title;
      tooltipDiv.classList.add('tooltip_active');
      tooltipDiv.style.top = `${event.target.getBoundingClientRect().top + 20}px`;
      tooltipDiv.style.left = `${event.target.getBoundingClientRect().left}px`;
      event.target.after(tooltipDiv);
    };
    event.preventDefault();
  })
}
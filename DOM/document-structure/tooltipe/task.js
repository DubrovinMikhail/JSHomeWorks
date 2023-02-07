tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltipDiv = document.createElement('div');
tooltipDiv.className = 'tooltip';

for (let tooltip of tooltips) {
  tooltip.addEventListener('click', (event) => {
    if (event.target.firstElementChild) {
      tooltipDiv.classList.toggle('tooltip_active');
    }else {
      tooltipDiv.textContent = tooltip.title;
      tooltipDiv.classList.add('tooltip_active');
      tooltipDiv.style.marginTop = "0px";
      tooltipDiv.style.marginLeft = `${event.target.getBoundingClientRect().left}px`;
      event.target.appendChild(tooltipDiv);
    };
    event.preventDefault();
  })
}
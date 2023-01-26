const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; ++i) {
  tabs[i].addEventListener('click', () => {
    activeTabId = tabs.indexOf(document.querySelector('.tab_active'));
    if (tabs[i].className != 'tab tab_active') {
      tabs[activeTabId].classList.remove('tab_active');
      tabsContent[activeTabId].classList.remove('tab__content_active');
      tabs[i].classList.add('tab_active');
      tabsContent[i].classList.add('tab__content_active');
    } 
  })
}
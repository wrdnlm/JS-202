const arrTabBtn = [...document.querySelectorAll('[role="tab"]')];
const arrTabs = [...document.querySelectorAll('[role="tabpanel"]')];
let activeTabPanel;
let activeTabBtn;

arrTabs.forEach(tabPanel => {
  if (tabPanel.hidden === false) {
    activeTabPanel = tabPanel;
  }
});

arrTabBtn.forEach(tabBtn => {
  if (tabBtn.getAttribute('aria-selected') && tabBtn.getAttribute('aria-selected') === 'true') {
    activeTabBtn = tabBtn;
  }
});

function handleTabs(e) {
  const target = e.target;
  const tabId = target.id;
  const targetTab = document.querySelector(`[aria-labelledby="${tabId}"]`);

  activeTabPanel.hidden = true;
  activeTabBtn.setAttribute('aria-selected', false);

  target.setAttribute('aria-selected', true);
  targetTab.hidden = false;

  activeTabBtn = target;
  activeTabPanel = targetTab;
}

arrTabBtn.forEach(tabBtn => {
  tabBtn.addEventListener('click', handleTabs);
});
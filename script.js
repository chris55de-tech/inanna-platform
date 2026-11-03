const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
const fileItems = document.querySelectorAll('.file-item');

function activateTab(tabName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach((panel) => {
    const isActive = panel.id === tabName;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });

  fileItems.forEach((item) => {
    const isActive = item.textContent.trim() === {
      readme: 'README.md',
      app: 'src/app.tsx',
      styles: 'src/styles.css',
      schema: 'data/schema.json',
    }[tabName];
    item.classList.toggle('active', isActive);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
});

fileItems.forEach((item) => {
  item.addEventListener('click', () => {
    const map = {
      'README.md': 'readme',
      'src/app.tsx': 'app',
      'src/styles.css': 'styles',
      'data/schema.json': 'schema',
    };

    activateTab(map[item.textContent.trim()]);
  });
});

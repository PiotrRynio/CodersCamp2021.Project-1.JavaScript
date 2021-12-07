export function renderComponent(component, testId = 'testId') {
  document.body.innerHTML = `<div id="component-parent"></div>`;
  const parent = document.querySelector('#component-parent');
  component.id = testId;
  parent.appendChild(component);
  return component;
}

let collapse = document.querySelector('.collapse')
let openMenu = document.querySelector('.open-menu')
let closeMenu = document.querySelector('.close-menu')

openMenu.onclick = function () {
  collapse.classList.add('show')
}
closeMenu.onclick = function () {
  collapse.classList.remove('show')
}

$(document).ready(function () {
  var tableContextMenu = new ContextMenu("context-menu-items", menuItemClickListener);
});

function menuItemClickListener(menu_item, parent) {
  alert("Menu Item Clicked: " + menu_item.text() + "\nRecord ID: " + parent.attr("data-row-id"));
}
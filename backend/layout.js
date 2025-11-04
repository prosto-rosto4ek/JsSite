import {
  createElementToStart,
  createElementWithText,
  addCSSClass
} from './htmlGenerater.js';

export function initLayout(body) {
  createElementToStart("div", body, "users");
  addCSSClass("chooseUserMenu", "users");

  createElementToStart("div", body, "todo");
  addCSSClass("menuTODO", "todo");

  createElementWithText("div", body, "breadcrumbs", null, "breadcrumbsMenu");
  createElementWithText("div", body, "topNavMenu", null, "topNavMenu");
}

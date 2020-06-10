/*
* spa.shell.js
* Shell module for SPA
*/

/*global $, spa */

spa.shell = (function () {
  var configMap = {
    main_html: String()
      + '<div class="spa-shell-head">'
      + '<div class="spa-shell-head-logo"></div>'
      + '<div class="spa-shell-head-acct"></div>'
      + '<div class="spa-shell-head-search"></div>'
      + '</div>'
      + '<div class="spa-shell-main">'
      + '<div class="spa-shell-main-nav"></div>'
      + '<div class="spa-shell-main-content"></div>'
      + '</div>'
      + '<div class="spa-shell-foot"></div>'
      + '<div class="spa-shell-chat"></div>'
      + '<div class="spa-shell-modal"></div>'
  },
    stateMap = { $container: null },
    jqueryMap = {},
    setJqueryMap, initModule;

  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container: $container };
  };
  // End DOM method /setJqueryMap/

  // Begin Public method /initModule/
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
  };
  // End PUBLIC method /initModule/

  return { initModule: initModule };
}());

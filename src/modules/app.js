requirejs.config({
  baseUrl: 'src',
  paths: {
    riot: '../node_modules/riot/riot',
    text: '../node_modules/requirejs-text/text',
    lodash: '../node_modules/lodash/index'
  }
});

requirejs(['riot', 'lodash', 'data/folders', 'utils/foldertree', 'modules/foldertree'], function (riot, _, folders, folderTreeUtils) {

  var folderTreeUtils = new folderTreeUtils(folders);

  riot.mount('foldertree', { folders: folders });

});
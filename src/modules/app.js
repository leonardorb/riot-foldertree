requirejs.config({
  baseUrl: 'src',
  paths: {
    riot: '../node_modules/riot/riot',
    text: '../node_modules/requirejs-text/text',
    lodash: '../node_modules/lodash/index'
  }
});

requirejs([
  'lodash',
  'data/folders',
  'utils/foldertree_builder',
  'modules/foldertree'
], function (_, folders, folderTreeUtils, folderTreeModule) {
  'use strict';

  var folderTreeUtils = new folderTreeUtils(folders);

  var folderTree = new folderTreeModule({ folders: folderTreeUtils.getFolderTree() });
  folderTree.build();

});
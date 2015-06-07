requirejs.config({
  baseUrl: 'src',
  paths: {
    riot: '../node_modules/riot/riot',
    text: '../node_modules/requirejs-text/text',
    lodash: '../node_modules/lodash/index'
  }
});

requirejs(['riot', 'lodash', 'data/folders', 'js/foldertree'], function (riot, _, folders) {

  var root = _.filter(folders, function (folder) {
    return folder.parent_id === null;
  });

  var mainFolders = _.filter(folders, function (folder) {
    return folder.parent_id === root[0].webid;
  });

  console.log(root);
  console.log(mainFolders);

  riot.mount('foldertree', { folders: folders });

});
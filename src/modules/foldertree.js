define([], function () {
  'use strict';

  var folderTree = function (options) {
    options.folders? this.folders = options.folders : this.folders = [];
  };

  folderTree.prototype.build = function () {
    riot.mount('foldertree', { folders: this.folders });
  };

  return folderTree;

});
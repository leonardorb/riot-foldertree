define([
  'riot',
  'text!components/foldertree.html',
], function (riot, tpl) {
  'use strict';

  riot.tag('foldertreee', tpl, function (opts) {
    this.folders = opts.folders;

    this.isFolder = function(node) {
      return node.nodes && node.nodes.length > 0;
    }
  });

});
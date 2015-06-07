define([
  'riot',
  'text!components/foldertree.html',
], function (riot, tpl) {
  'use strict';

  riot.tag('foldertree', tpl, function (opts) {
    this.folders = opts.folders;
  });

});
define([], function () {
  'use strict';

  var folderTreeUtils = function (folders) {
    folders ? this.folders = folders : this.folders = {};
  };

  folderTreeUtils.prototype.getRootFolder = function () {
    return _.findWhere(this.folders, { parent_id: null });
  };

  folderTreeUtils.prototype.getInboxFolder = function () {
    return _.findWhere(this.folders, { type: 'System Folder', name: 'Inbox' });
  };

  folderTreeUtils.prototype.getCabinetFolder = function () {
    return _.findWhere(this.folders, {type: 'Cabinet'});
  };

  folderTreeUtils.prototype.getTrashFolder = function () {
    return _.findWhere(this.folders, { type: 'System Folder', name: 'Trash' });
  };

  /*

  @params
  options: {inbox: true/false, cabinet: true/false, trash: true/false}

  */
  folderTreeUtils.prototype.getFolderTree = function (options) {
    var _this = this,
        _options = options || {},
        build_options = {},
        folderTreeData = [];

    _options.inbox? build_options.inbox = _options.inbox : build_options.inbox = true;
    _options.cabinet? build_options.cabinet = _options.cabinet : build_options.cabinet = true;
    _options.trash? build_options.trash = _options.trash : build_options.trash = true;

    if (build_options.inbox) folderTreeData.push(_this.getInboxTree());
    if (build_options.cabinet) folderTreeData.push(_this.getCabinetTree());
    if (build_options.trash) folderTreeData.push(_this.getTrashTree());
    return folderTreeData;

  };

  folderTreeUtils.prototype.getInboxTree = function () {
    var _this = this,
        inboxFolder = _this.getInboxFolder();

    return(_this.getAllFoldersWithin(inboxFolder.webid));
  };

  folderTreeUtils.prototype.getCabinetTree = function () {
    var _this = this,
        cabinetFolder = _this.getCabinetFolder();

    return(_this.getAllFoldersWithin(cabinetFolder.webid));
  };

  folderTreeUtils.prototype.getTrashTree = function () {
    var _this = this,
        trashFolder = _this.getTrashFolder();

    return(_this.getAllFoldersWithin(trashFolder.webid));
  };

  folderTreeUtils.prototype.getAllFoldersWithin = function (folderId) {
    var _this = this,
        _folderId = folderId,
        currentFolder = _.findWhere(this.folders, { webid : _folderId }),
        directChildren = _.filter(this.folders,  function (folder) { return folder.parent_id === currentFolder.webid }),
        foldersData = {};

    foldersData = { webid: currentFolder.webid, name: currentFolder.name, nodes: [] };

    if (directChildren) {
      _.each(directChildren, function (child, key) {
        var child = { webid: child.webid, name: child.name, nodes: [] };
        foldersData.nodes[key] = _this.getAllFoldersWithin(child.webid);
      });
      return foldersData;
    } else {
      return foldersData;
    }
  };

  return folderTreeUtils;

});
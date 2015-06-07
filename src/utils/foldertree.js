define([], function () {

  var folderTreeUtils = function (folders) {
    folders ? this.folders = folders : this.folders = {};
  }

  folderTreeUtils.prototype.getRootFolder = function () {
    return _.findWhere(this.folders, { parent_id: null });
  }

  folderTreeUtils.prototype.getInboxFolder = function () {
    return _.findWhere(this.folders, { type: 'System Folder', name: 'Inbox' });
  }

  folderTreeUtils.prototype.getCabinetFolder = function () {
    return _.findWhere(this.folders, {type: 'Cabinet'});
  }

  folderTreeUtils.prototype.getTrashFolder = function () {
    return _.findWhere(this.folders, { type: 'System Folder', name: 'Trash' });
  }

  /*

  @params
  options: {inbox: true/false, cabinet: true/false, trash: true/false}

  */
  folderTreeUtils.prototype.getFolderTree = function (options) {
    var _options = options || {},
        build_options = {};

    _options.inbox? build_options.inbox = _options.inbox : build_options.inbox = true;
    _options.cabinet? build_options.cabinet = _options.cabinet : build_options.cabinet = true;
    _options.trash? build_options.trash = _options.trash : build_options.trash = true;

  }

  return folderTreeUtils;

});
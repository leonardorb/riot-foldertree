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
    var _this = this,
        _options = options || {},
        build_options = {},
        folderTreeData = [];

    _options.inbox? build_options.inbox = _options.inbox : build_options.inbox = true;
    _options.cabinet? build_options.cabinet = _options.cabinet : build_options.cabinet = true;
    _options.trash? build_options.trash = _options.trash : build_options.trash = true;

    if (build_options.inbox) {
      var inboxFolder = _this.getInboxFolder(),
          inboxChildren = [],
          folderTreeDataInbox = {};

      folderTreeDataInbox.webid = inboxFolder.webid;
      folderTreeDataInbox.name = inboxFolder.name;
      folderTreeDataInbox.nodes = [];

      _.each(_this.folders, function (folder) {
        if (folder.parent_id === inboxFolder.webid) {
          folderTreeDataInbox.nodes.push({ webid: folder.webid, name: folder.name });
        }
      });

      folderTreeData.push(folderTreeDataInbox);
      var myCabinetFolder = _this.getCabinetFolder();
      folderTreeData.push({ name: myCabinetFolder.name, webid: myCabinetFolder.webid, nodes: [ { name: 'Another Folder', webid: 'u238jjsd9128u312' } ]});
      return folderTreeData;
    }

  }

  return folderTreeUtils;

});
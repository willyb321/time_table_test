var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', "TimeTableTest-" + process.platform + "-" + process.arch, 'TimeTableTest.app', 'Contents', 'MacOS', 'TimeTableTest');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', "TimeTableTest-" + process.platform + "-" + process.arch, 'TimeTableTest');
      default:
        throw 'Unsupported platform';
    }
  }
};

const md = require('react-icons/md');
const fa = require('react-icons/fa');

const icons = [
  'MdSearch', 'MdTerminal', 'MdLayers', 'MdAccountBalanceWallet', 'MdWallet', 'MdCode', 'MdCheck', 'MdContentCopy', 'MdOpenInNew', 'MdInsights', 'MdImage', 'MdInfo',
  'MdFavorite', 'MdSecurity', 'MdCallSplit', 'MdErrorOutline', 'MdAccessTime', 'MdCommit', 'MdRefresh', 'MdCheckCircleOutline', 'MdAutoAwesome', 'MdArrowForward',
  'MdArrowBack', 'MdNorthEast', 'MdMenuBook', 'MdInsertDriveFile', 'MdStar', 'MdDeviceHub', 'MdDownload', 'FaGithub'
];

icons.forEach(i => {
  if (md[i] || fa[i]) {
    console.log(i + ' exists');
  } else {
    console.log(i + ' MISSING');
  }
});

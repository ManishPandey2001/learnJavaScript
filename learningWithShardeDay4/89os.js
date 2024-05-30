const os = require('os');

console.log(os.platform());  // 'win32', 'darwin', 'linux', etc.
console.log(os.release());  // Version (e.g., '10.0.19044')
console.log(os.arch());    // Architecture (e.g., 'x64')

const shelljs = require('shelljs');
exports.handler = function(projectName) {

    shelljs.exec(`git clone https://github.com/X-Yin/xyin-vue.git`);
    shelljs.exec(`mv xyin-vue ${projectName}`);
    console.log('---------------------------');
    console.log(`cd ${projectName}`);
    console.log(`run 'npm install'`);
    console.log(`run 'npm run start'`);
}
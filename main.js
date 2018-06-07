const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Browser window is global
let bigwin;

function createWindow() {
  // create borwser window
  bigwin = new BrowserWindow({width:800, height: 600, icon:__dirname+'/img/sot.png'});

 // load index,html
  bigwin.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

// open dev tools
//  bigwin.webContents.openDevTools();

  bigwin.on('closed', () => {
    bigwin = null;
  });

}

// Run create window function
app.on('ready', createWindow);

app.on('window-all-closed', () => {
if(process.platform !== 'darwin') {
  app.quit();
}

})

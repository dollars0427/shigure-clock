const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const nativeImage = electron.nativeImage;
const BrowserWindow = electron.BrowserWindow;

const path = require('path')
const url = require('url')

let mainWindow;
let tray;

function createTray(){
  let appIcon = null
  const iconPath = path.join(__dirname, 'clock-mini.png');
  const icon = nativeImage.createFromPath(iconPath);
  const contextMenu = Menu.buildFromTemplate([{
    label: 'Show Shigure Clock',
    click() {
      mainWindow.show();
    }
  },
  {
    label: 'Hide',
    click() {
      mainWindow.hide();
    }
  },
  {
    label: 'Quit',
    click() {
      mainWindow.close()
    }
  }
]);
tray = new Tray(icon);
tray.setToolTip('Shigure Clock')
tray.setContextMenu(contextMenu);
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 80,
    transparent: true,
    frame: false,
    alwaysOnTop:true,
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
    app.quit();
  })
  createTray();
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

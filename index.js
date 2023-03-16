const { app, globalShortcut, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile(path.join(__dirname,'index.html'))

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  globalShortcut.register('CommandOrControl+Space', () => {
    const timerCommand = "timer: 30min"
    mainWindow.webContents.send('timer', timerCommand)
  })
}

app.on('ready', createWindow)
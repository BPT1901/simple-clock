const { app, BrowserWindow, screen } = require('electron')

const createWindow = () => {
    const { width } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1800,
        height: 100,
        x: (width - 1800) / 2, 
        y: 0, 
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,   
        },
        
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


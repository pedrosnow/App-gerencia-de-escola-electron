const {app, BrowserWindow} = require('electron')

const CreateWindow = () =>{
    const Window = new BrowserWindow()

    Window.loadFile('index.html')
}


app.on('ready', ()=>{
    CreateWindow()
})
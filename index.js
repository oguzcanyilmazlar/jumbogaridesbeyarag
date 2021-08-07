const express = require('express')
const path = require('path')
const app = express()

app.use((req,res,next) => {
    res.header('Refresh','5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    next()
})

app.use(express.static(__dirname));



app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html')) 
    /*res.set({
        'Access-Control-Expose-Headers': 'ETag',
        'Refresh': '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    })*/
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
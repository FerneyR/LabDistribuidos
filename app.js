const express = require('express')
const app = express()
const port = 3000
const numcorrecto = ["1","2","3","4"]

function PyF(numingresado, res){
  var picas = 0
  var fijas = 0

    for (i=0; i<4; i++)
        for (j=0; j<4; j++)
        if (numcorrecto[i] == numingresado[j]){
        if(i == j){
        fijas++
        }
        else{
        picas++
        }
        }
      if (fijas ==4)
          res.send('El número ingresado es el número misterioso.')
      else
    res.send('Número de picas: '+picas+'        Número de fijas: '+fijas)
  }

app.get('/', (req, res) => {
  const x=req.query.a
  numingresado = [x.charAt(0), x.charAt(1), x.charAt(2), x.charAt(3)]
    PyF(numingresado, res)

})

app.post('/', (req, res) => {
  const x=req.query.name;
  res.send('Hola '+x)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

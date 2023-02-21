const express = require('express')
const engine = require('express-handlebars').engine
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

require('./model/db')

const app = express()

app.engine('handlebars',engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/emp",require('./controllers/routes'))


const PORT = 3000
app.listen(PORT,()=> console.log(`Server is running ${PORT}`))

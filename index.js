import express from 'express';
import path from 'path';
import {requestTime, logger} from './midlewares.js';
import serverRoutes from './routes/servers.js';



const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));


app.use(express.static(path.resolve(__dirname, 'static')));
app.use(requestTime);
app.use(logger);
app.use(serverRoutes);




app.get('/', (req, res)=>{
    res.render('index', {title: 'Home', active: 'Home'})
})

app.get('/features', (req, res)=>{
    res.render('features', {title: 'Features Page', active: 'features'})
})

app.get('/gallery', (req, res)=>{
    res.render('gallery', {title: 'Gallery Page', active: 'gallery'})
})

app.get('/chapters', (req, res)=>{
    res.render('chapters', {title: 'Chapters', active: 'chapters'})
})

app.get('/main', (req, res)=>{
    res.render('main', {title: 'Main Page', active: 'main'})
})


app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`);
})
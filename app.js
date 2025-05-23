import express from "express";

import * as db from './util/database.js'

const app = express();
app.use(express.json);
const PORT = 8080

app.get('/recipes', (req, res) => {
    try {
        const recipes = db.getRecipes();
        res.status(400).json(recipes)
    } catch (err) {
        res.status(404).json({message: `${err}`})
    }
})

app.get('/recipes/:id', (req, res) => {
    try {
        const recipes = db.getRecipes(req.params.id);
        if(!recipes){
            return res.status(400).json({message: 'Recipe not found'})   
        }
    } catch (err) {
        res.status(404).json({message: `${err}`})
    }
})

app.post('/recipes', (req, res) => {
    try {
        const {name, content} = req.body
        if(!name || !content){
            return res.status(400).json({message: 'Recipe apploaded succesfull'})   
        }
    } catch (err) {
        res.status(404).json({message: `${err}`})
    }
})

app.delete('/recipes/:id', (req, res) => {
    try {
        const deleteRecipes = db.deleteRecipes(req.params.id);
        if(deleteRecipes.changes != 1){
            return res.status(400).json({message: 'Recipe deleted succesfull'})   
        }
    } catch (err) {
        res.status(404).json({message: `${err}`})
    }
})

app.listen(PORT, () => {console.log(`Servers run on port ${PORT}`)})
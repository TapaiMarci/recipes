import Database from "better-sqlite3";

const db = new Database('./data/database.sqlite');

db.prepare('CREATE TABLE IF NOT EXISTS recipes(id INTEGER PRIMARY KEYn title TEXT, content TEXT)').run();

export const getRecipes = () => db.prepare('SELECT * FROM recipes').all();
export const getRecipe = (id) => db.prepare('SELECT * FROM recipes WHERE id = ?').get(id);
export const updateRecipes = (title, content) => db.prepare('UPDATE recipes SET (title, content) VALUES (?,?)').run(title, content);
export const deleteRecipes = (id) => db.prepare('DELETE FROM recipes WHERE id = ?').run(id);

const recipes = [
    {name: "Tejbegríz", content:"tej, rizs, cukor"},
    {name: "Paprikáskrumpli", content:"paprika, kolbász, krumpli, bors, só"},
    {name: "Carbonara", content:"spagetti, bacon, sajt, tejszín"},
    {name: "Lasagne", content:"darálthús, paradicsomszósz, mozarella"}
]
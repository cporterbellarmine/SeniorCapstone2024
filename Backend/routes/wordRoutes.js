const express = require('express');
const Word = require('../models/Word');
const app = express();

const router = new express.Router();

app.post('/Words', async (req, res) => {
    try{
        const newWord = new Word(req.body);
        await newWord.save();
        res.status(201).send(newWord);
    } catch(error) {
        res.status(400).send(error);
    }
});

app.patch('Words/:id', async (req, res) => {
    try{
        const word = await Word.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!word){
            return res.status(404).send();
        }
        res.send(word);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/Words', async(req, res) => {
    try{
        const words = await Word.find({});
        res.send(words);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('Words/:id', async(req, res) => {
    try{
        const word = await Word.findByIdAndDelete(req.params.id);
        if(!word){
            return res.status(404).send();
        }
        res.send(word);
    } catch (error){
        res.status(500).send(error);
    }
});


module.exports = router;
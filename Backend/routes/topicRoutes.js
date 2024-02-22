const express = require('express');
const Topic = require('../../models/Topic');
const app = express();

const router = new express.Router();

app.post('/Topics', async (req, res) => {
    try{
        const newTopic = new Topic(req.body);
        await newTopic.save();
        res.status(201).send(newTopic);
    } catch(error) {
        res.status(400).send(error);
    }
});

app.patch('Topics/:id', async (req, res) => {
    try{
        const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!topic){
            return res.status(404).send();
        }
        res.send(topic);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/Topics', async(req, res) => {
    try{
        const topics = await Topic.find({});
        res.send(topics);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('Topics/:id', async(req, res) => {
    try{
        const topic = await Topic.findByIdAndDelete(req.params.id);
        if(!topic){
            return res.status(404).send();
        }
        res.send(topic);
    } catch (error){
        res.status(500).send(error);
    }
});

module.exports = router;
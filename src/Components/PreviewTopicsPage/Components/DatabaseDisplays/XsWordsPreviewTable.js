// Used in /Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer
// Used in /Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { WordsParentContainer } from '../../PreviewTopicsCompStyling';
import './list_group.css';

function XsWordsPreviewTable({ topic }){

    const[words, setWords] = useState([]);

    useEffect(() => {
        const fetchWords = async () => {
            try{
                const response = await axios.get(`https://senior-capstone2024-backend.vercel.app/words?topic=${topic}`);
                setWords(response.data);
            } catch (error){
                console.error('Error fetching words:', error);
            }
        };
        fetchWords();
    }, [topic]);

    if(words.length != 0){
        return(
            <ListGroup variant='flush' className='p-0 overflow-y-scroll list_group-height'>
                {words.map(word => (
                    <ListGroup.Item key={word._id}>{word.word}</ListGroup.Item>
                ))}
            </ListGroup>
        )
    }else{
        return(
            <ListGroup variant='flush' className='p-0 overflow-y-scroll list_group-height'>
                <ListGroup.Item key='default'>Please choose a topic above.</ListGroup.Item>
            </ListGroup>
        )
    }
    ;
};
export default XsWordsPreviewTable;
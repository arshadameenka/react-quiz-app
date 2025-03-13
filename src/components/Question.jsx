import React, { useEffect, useState } from 'react'
import { Grid2, Button } from '@mui/material'
import { teal } from '@mui/material/colors';
import Result from './Result';


function Question({ difficulty, category }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    useEffect(() => {
        fetchQuestions()
    }, [])

    async function fetchQuestions() {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=2&category=${category}&difficulty=${difficulty}&type=multiple`);
            const data = await response.json();
            const questionsObj = data.results;
            //console.log(questionsObj);

            setQuestions(questionsObj);
        } catch (error) {

        }
    }
    const questionObj = questions[currentQuestionIndex];
    //console.log(questionObj);
    if (questions.length === 0) {
        return <p>Loading...</p>;
    }
    if (!questionObj)
        return <p>Loading...</p>; // ✅ Handle the case where data is not yet loaded

    const { question, correct_answer, incorrect_answers } = questionObj;
    const allAnswers = shuffle([...incorrect_answers, correct_answer]);
    function handleAnswer(choice) {
        const isCorrect = choice === correct_answer;

        setUserAnswers(prev => {
            const updatedAnswers = [...prev, { question, selected: choice, correct: correct_answer }];
            return updatedAnswers;
        });

        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        // Move to the next question OR show result if it's the last question
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setTimeout(() => {
                setShowResult(true);
            }, 500);
        }
    }
    return (
        showResult ? (<Result score={score} total={questions.length} userAnswers={userAnswers} />) : (
            <>


                <Grid2 size={12} >
                <Button  
                        variant="contained"
                        sx={{
                            bgcolor: teal[500],
                            width: '100%',
                            fontSize: '1.2rem',
                            textAlign: 'center',
                            mb: 4,
                        }}><span dangerouslySetInnerHTML={{ __html:question}}></span></Button>
                    
                </Grid2>

                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    {allAnswers.map((choice, index) => (
                        <Grid2 key={index} size={6} >
                            <Button
                                onClick={() => handleAnswer(choice)}
                                variant="contained"
                                sx={{ width: '100%', padding: 2 }}
                            >
                                {choice}
                            </Button>
                        </Grid2>
                    ))}
                </Grid2>
            </>



        )

    )
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export default Question
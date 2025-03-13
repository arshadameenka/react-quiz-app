import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

function Result({ score, total, userAnswers }) {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Quiz Completed!</h2>
            <h3>Your Score: {score} / {total}</h3>
            
            <div style={{ maxWidth: '600px', margin: 'auto' }}>
                {userAnswers.map((item, index) => (
                    <Card key={index} variant="outlined" style={{ margin: '10px', padding: '10px' }}>
                        <CardContent>
                            <Typography variant="h6">{index + 1}. {item.question}</Typography>
                            <Typography variant="body1">
                                <strong>Your Answer:</strong> 
                                <span style={{ color: item.selected === item.correct ? 'green' : 'red' }}>
                                    {item.selected}
                                </span>
                            </Typography>
                            <Typography variant="body1">
                                <strong>Correct Answer:</strong> {item.correct}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Button variant="contained" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
                Restart Quiz
            </Button>
        </div>
    );
}

export default Result;

import { useState,useEffect, useReducer } from 'react';
import Categories from './Categories';  
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'Easy':
//             return 'easy';
//         case 'Medium':
//             return 'medium';
//         case 'Hard':
//             return 'hard';
//         default:
//             return state;
//     }
// }
const Difficulty = () => {
    const [difficultySelected, setDifficultySelected] = useState(false);
    const [difficulty, setDifficulty] = useState('easy');
    // const [difficulty, dispatch] = useReducer(reducer, 'easy');
    
    // useEffect(() =>{
    //     setDifficultySelected('true');
    // },[difficultySelected])

    return (
        <>
        {!difficultySelected ? (
            <>
            <Typography variant='h5' sx={{ mb: 4 }}>Choose Difficulty</Typography>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <Button onClick={() =>  {setDifficulty('easy');setDifficultySelected(true);}} variant="contained">Easy</Button>
                <Button onClick={() => {setDifficulty('medium');setDifficultySelected(true);}} variant="contained">Medium</Button>
                <Button onClick={() =>  {setDifficulty('hard');setDifficultySelected(true);}} variant="contained">Hard</Button>
            </Stack>
            </>
        ) : (
            <Categories difficulty={difficulty} setDiff={setDifficultySelected}  />    
        )}   
        </>

    )
}

export default Difficulty
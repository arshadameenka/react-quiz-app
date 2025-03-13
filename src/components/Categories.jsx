import { Typography, Button, Stack, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import Question   from "./Question";

export default function Categories({ difficulty, setDiff }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Category, setCategory] = useState(null);
    useEffect(() => {
        fetchData();
    }, [difficulty])
    async function fetchData() {
        try {
            const response = await fetch(`https://opentdb.com/api_category.php`);
            const data = await response.json();
            setCategories(data.trivia_categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }

    }
    return (
        <>
            {Category ? (<Question difficulty={difficulty} category={Category} />) : (

                <>
                    <Typography variant='h5' sx={{ mb: 4 }}>Choose Category</Typography>
                    {loading ? (
                        // Show a loading spinner while fetching data
                        <Stack alignItems="center">
                            <CircularProgress />
                            <Typography>Loading categories...</Typography>
                        </Stack>
                    ) : (
                        <Stack direction="row" justifyContent="center" alignItems="start" sx={{ flexWrap: 'wrap', gap: 1, m: 2 }}>
                            {categories &&
                                categories.map((category) => (
                                    <Button key={category.id} onClick={() => setCategory(category.id)} variant="contained">{category.name.replace(/^.*?:\s*/, "")}</Button>
                                ))}
                        </Stack>
                    )}


                    <Stack>
                        <Button onClick={() => setDiff(false)} variant="contained" color="error" >Back</Button>
                    </Stack>
                </>
            )}
        </>
    )
}
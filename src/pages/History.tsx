import { useExercise } from "@/providers/Exercise";
import { Container, List, ListItem, ListItemText, Typography } from "@mui/material";

export const History = () => {
    const { exercises } = useExercise();
    const completedExercises = exercises.filter((exercise) => exercise.isDone);
    return (
        <Container maxWidth="md" sx={{ pt: 4 }}>
            <Typography variant="h4" mb={4}>
                History
            </Typography>
            {completedExercises.length === 0 ? (
                <Typography variant="h6">No completed exercises yet.</Typography>
            ) : (
                <List>
                    {completedExercises.map((exercise) => (
                        <ListItem key={exercise.id}>
                            <ListItemText
                                primary={exercise.name}
                                secondary={`Sets: ${exercise.completedSets} [COMPLETED]`}
                            />
                        </ListItem>
                    ))}
                </List>                   
            )
            }
        </Container>
    );
};

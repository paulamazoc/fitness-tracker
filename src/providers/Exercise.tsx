import type { Exercise, ExerciseContextType } from "@/types";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export const useExercise = () => {
    const context = useContext(ExerciseContext);
    if (!context) throw new Error('useExercise must be inside ExerciseProvider')
    return context
};

export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(() => {
        const data = localStorage.getItem('fitnessTracker.exercises');
        if (data) {
            try {
                setExercises(JSON.parse(data));
            } catch (error) {
                console.error('Failed to parse exercises in localStorage. Error: ', error);
            }
        };
    }, []);

    return (
        <ExerciseContext.Provider value={{ exercises }}>
            {children}
        </ExerciseContext.Provider>
    );
};

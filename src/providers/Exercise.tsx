import type { Exercise, ExerciseContextType } from "@/types";
import { EXERCISES_LOCAL_STORAGE_KEY } from "@/utils/constants";
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
        const data = localStorage.getItem(EXERCISES_LOCAL_STORAGE_KEY);
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

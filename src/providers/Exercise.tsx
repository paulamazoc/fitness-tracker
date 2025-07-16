import type { Exercise, ExerciseContextType } from "@/types";
import { EXERCISES_LOCAL_STORAGE_KEY } from "@/utils/constants";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { v4 } from 'uuid';

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

    useEffect(() => {
        localStorage.setItem(EXERCISES_LOCAL_STORAGE_KEY, JSON.stringify(exercises));
    }, [exercises]);

    const addExercise = (name: string, sets: number) => {
        const newExercise: Exercise = {
            id: v4(),
            name,
            sets,
            completedSets: 0,
            isDone: false,
        };
        setExercises((prev) => [newExercise, ...prev]);
    };

    const checkDone = (id: string) => {
        setExercises((prev) =>
            prev.map((exercise) => (exercise.id === id ? {...exercise, isDone: !exercise.isDone} : exercise))
        );
    }

    return (
        <ExerciseContext.Provider value={{ exercises, addExercise, checkDone }}>
            {children}
        </ExerciseContext.Provider>
    );
};

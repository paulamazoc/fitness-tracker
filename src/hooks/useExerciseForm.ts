import { useExercise } from "@/providers/Exercise";
import { useState } from "react";

export const useExerciseForm = () => {
    const [name, setName] = useState("");
    const [sets, setSets] = useState(1);
    const { addExercise } = useExercise();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || sets < 1) return;
        addExercise(name.trim(), sets);
        setName('');
        setSets(1);
    };

    const handleSetsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = Number(value);
        if (value === "" || (!isNaN(numericValue) && numericValue >= 0)) {
            setSets(numericValue);
        };
    }

    return {
        handleSetsOnChange,
        handleSubmit,
        name,
        setName,
        sets,
    };
};

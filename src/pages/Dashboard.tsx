import { ExerciseCard } from "@/components/ExerciseCard";
import { ExerciseForm } from "@/components/ExerciseForm";
import { QuoteGenerator } from "@/components/QuoteGenerator";

export const Dashboard = () => {
    return (
        <>
            <ExerciseForm />
            <ExerciseCard />
            <QuoteGenerator />
        </>
    );
};

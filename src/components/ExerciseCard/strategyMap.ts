export const exerciseCardStrategyMap = {
  uncompleted: {
    showProgressBar: true,
    showActions: true,
    cardBg: '#1e1e1e',
  },
  done: {
    showProgressBar: false,
    showActions: false,
    cardBg: '#2a2a2a',
  },
} as const;

export type ExerciseCardVariant = keyof typeof exerciseCardStrategyMap;

import { Exercise, ExcerciseLevel, MuscleGroup, Equipment } from './exercise'

export const EXERCISES: Exercise[] = [
    { id: 11, name: 'Bench Press', description: 'description description', level: ExcerciseLevel.Intermediate, muscleGroups: [MuscleGroup.Chest], equipments: [] },
    { id: 12, name: 'Push Up', description: 'description description', level: ExcerciseLevel.Beginner, muscleGroups: [MuscleGroup.Chest], equipments: [] },
    { id: 13, name: 'Pull Up', description: 'description description', level: ExcerciseLevel.Intermediate, muscleGroups: [MuscleGroup.Back], equipments: [] },
    { id: 13, name: 'Chin Up', description: 'description description description', level: ExcerciseLevel.Beginner, muscleGroups: [MuscleGroup.Back], equipments: [] },
];


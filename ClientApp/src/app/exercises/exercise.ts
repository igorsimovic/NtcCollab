export class Exercise {
    id: number;
    name: string;
    description: string;
    muscleGroups: MuscleGroup[];
    equipments: Equipment[];
    level: ExcerciseLevel;
}


export class Equipment {
    id: number;
    name: string;
}


export enum MuscleGroup {
    Chest,
    Back
}

export enum ExcerciseLevel {
    Beginner,
    Intermediate,
    Advanced
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NtcCollabWebAPI.ViewModels;

namespace NtcCollabWebAPI.Services
{
    public class ExerciseService : IExerciseService
    {
        public Task<IEnumerable<ExerciseViewModel>> ReadAllAsync()
        {
            var result = new List<ExerciseViewModel>()
            {
                new ExerciseViewModel()
                {
                    Id = 11,
                    Name = "Bench Press",
                    Description =  "description description",
                    Level = ExerciseLevel.Intermediate,
                    MuscleGroups = new List<MuscleGroup>() { MuscleGroup.Chest }
                },
                new ExerciseViewModel()
                {
                    Id = 12,
                    Name = "Push Up",
                    Description =  "description description",
                    Level = ExerciseLevel.Beginner,
                    MuscleGroups = new List<MuscleGroup>() { MuscleGroup.Chest }
                },
                new ExerciseViewModel()
                {
                    Id = 13,
                    Name = "Pull Up",
                    Description =  "description description",
                    Level = ExerciseLevel.Intermediate,
                    MuscleGroups = new List<MuscleGroup>() { MuscleGroup.Back }
                },
                new ExerciseViewModel()
                {
                    Id = 14,
                    Name = "Chin Up",
                    Description =  "description description",
                    Level = ExerciseLevel.Beginner,
                    MuscleGroups = new List<MuscleGroup>() { MuscleGroup.Back }
                }
            };

            return Task.FromResult<IEnumerable<ExerciseViewModel>>(result);
        }
    }
}



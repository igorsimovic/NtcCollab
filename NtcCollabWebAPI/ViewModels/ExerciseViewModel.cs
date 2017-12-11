using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NtcCollabWebAPI.ViewModels
{
    public class ExerciseViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IEnumerable<MuscleGroup> MuscleGroups { get; set; }
        public ExerciseLevel Level { get; set; }
        
        //Video URL

        //Equipments
    }

    public enum MuscleGroup
    {
        Chest,
        Back,
        Legs,
        Biceps,
        Triceps
    }

    public enum ExerciseLevel
    {
        Beginner,
        Intermediate,
        Advanced
    }
}

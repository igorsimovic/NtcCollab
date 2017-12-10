using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NtcCollabWebAPI.Entities
{
    public class Exercise : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ViewModels.ExerciseLevel Level { get; set; }
    }
}

using NtcCollabWebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NtcCollabWebAPI.Services
{
    public interface IExerciseService
    {
        Task<IEnumerable<ExerciseViewModel>> ReadAllAsync();
    }
}

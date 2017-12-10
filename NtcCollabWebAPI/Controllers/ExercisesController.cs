using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NtcCollabWebAPI.ViewModels;
using NtcCollabWebAPI.Services;
using Microsoft.AspNetCore.Authorization;

namespace NtcCollabWebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ExercisesController : Controller
    {
        private readonly IExerciseService _exerciseService;

        public ExercisesController(IExerciseService exerciseService)
        {
            _exerciseService = exerciseService ?? throw new ArgumentNullException(nameof(exerciseService));
        }
        // GET: api/Exercises
        [Authorize]
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ExerciseViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            var allExercises = await _exerciseService.ReadAllAsync();

            return Ok(allExercises);
        }

        // GET: api/Exercises/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Exercises
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Exercises/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

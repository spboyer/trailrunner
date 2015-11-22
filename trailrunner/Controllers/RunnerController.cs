using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using trailrunner.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace trailrunner.Controllers
{
    public class RunnerController : Controller
    {
        [HttpGetAttribute("api/runner")]
        public Runner[] Get()
        {
            var people = new List<Runner>();
            people.Add(new Runner() { Id = 1, First = "Shayne", Last = "Boyer", Age = 42, FavoriteBeer = "Guiness" });
            people.Add(new Runner() { Id = 2, First = "Kirsty", Last = "Boyer", Age = 38, FavoriteBeer = "Golden Monkey" });
            people.Add(new Runner() { Id = 3, First = "Jen", Last = "Lockrem", Age = 38, FavoriteBeer = "Golden Monkey" });
            people.Add(new Runner() { Id = 4, First = "Wes", Last = "Smith", Age = 50, FavoriteBeer = "Michelob Ultra" });
            people.Add(new Runner() { Id = 5, First = "Chris", Last = "Goodreau", Age = 52, FavoriteBeer = "Miller Lite" });

            return people.ToArray();
        }

        [HttpGetAttribute("api/runner/{id}")]
        public Runner Get(int id)
        {
            return Get().Where(p => p.Id == id).FirstOrDefault();
        }
    }
}

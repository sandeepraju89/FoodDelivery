using FoodDelivery.Server.Data;
using FoodDelivery.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private readonly FoodDeliveryDbContext context;

        public MenuItemController(FoodDeliveryDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<MenuItem> Get()
        {
            return context.MenuItem.ToList();
            
        }
    }
}

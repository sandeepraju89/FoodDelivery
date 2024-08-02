using FoodDelivery.Server.Data;
using FoodDelivery.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private readonly FoodDeliveryDbContext context;

        public MenuItemController(FoodDeliveryDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public JsonResult Get()
        {
             
            return new JsonResult( context.MenuItem.ToList());
            
        }
    }
}

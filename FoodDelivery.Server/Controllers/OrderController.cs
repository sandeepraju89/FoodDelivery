using FoodDelivery.Server.Data;
using FoodDelivery.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrdersDbContext dbContext;

        public OrderController(OrdersDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost]
        public ActionResult AddOrder([FromBody]IEnumerable<OrderFoodItem> orderFoodItems)
        {
            try
            {
                var orderItems = new List<OrderItem>();
                foreach (var item in orderFoodItems)
                {
                    orderItems.Add(new OrderItem { MenuItemId = item.FoodItemId, Quantity = item.Quantity });
                }
                dbContext.OrderInfo.Add(new OrderInfo { IsHandled = false, OrderItems = orderItems, CreateDateTime = DateTime.UtcNow });
                dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            Console.WriteLine("From OrderController");
            return Created();
        }
    }
}

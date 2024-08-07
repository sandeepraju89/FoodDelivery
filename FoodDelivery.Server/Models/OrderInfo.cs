using System.ComponentModel.DataAnnotations;

namespace FoodDelivery.Server.Models
{
    public class OrderInfo
    {
        [Key]
        public int Id { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public bool IsHandled { get;set; }
        public DateTime CreateDateTime { get; set; }
        public DateTime? HandledDateTime { get; set; }
        public List<OrderItem> OrderItems { get; set; }

    }
}

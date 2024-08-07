using FoodDelivery.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.Server.Data
{
    public class OrdersDbContext : DbContext
    {
        public OrdersDbContext(DbContextOptions<OrdersDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("orders");
        }

        public DbSet<OrderInfo> OrderInfo { get; set; }
    }
}

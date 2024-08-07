using FoodDelivery.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml.Serialization;

namespace FoodDelivery.Server.Data
{
    
    public class FoodDeliveryDbContext : DbContext
    {
        public FoodDeliveryDbContext(DbContextOptions<FoodDeliveryDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Configure default schema
            modelBuilder.HasDefaultSchema("food");            
        }
        public DbSet<MenuItem> MenuItem { get; set; }
        
    }
}

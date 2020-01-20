using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using ElectroShop_Core.Data.Entities;
using Newtonsoft.Json;
using System.IO;

namespace ElectroShop_Core.Data
{
    public class ElectroShopSeeder
    {
        private readonly ElectroshopContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;
        public ElectroShopSeeder(ElectroshopContext ctx, IHostingEnvironment hosting, UserManager<StoreUser> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();
            StoreUser user = await _userManager.FindByEmailAsync("romanm@electro-shop.com");
            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Roman",
                    LastName = "Mayerson",
                    Email = "romanm@electro-shop.com",
                    UserName = "admin"
                };

                var result = await _userManager.CreateAsync(user, "1q2w3e4R!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in seeder");
                }
            }

            if (!_ctx.Products.Any())
            {
                //Need to create sample data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/products.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _ctx.Products.AddRange(products);

                _ctx.SaveChanges();


            }

            if (_ctx.Products.Any() && (!_ctx.Orders.Any()))
            {
                //Need to create sample data

                _ctx.Orders.Add(new Order
                {
                    User = user,
                    OrderDate = DateTime.Now,
                    OrderNumber = "ababab122",
                    Items = new List<OrderItem>()
               {
                   new OrderItem()
                   {
                       Product = _ctx.Products.First(),
                       Quantity = 7,
                      
                   }
               }
                }); ;

                _ctx.SaveChanges();


            }

            //var order = _ctx.Orders.Where(o => o.Id == 1).FirstOrDefault();
            //if (order == null)
            //{
            //    order.Items = new List<OrderItem>()
            //        {
            //       new OrderItem()
            //       {
            //           Product=products.First(),
            //           Quantity=5,
            //           UnitPrice = products.First().Price

            //       }
            //        };
            //}
        }
    }
}
    


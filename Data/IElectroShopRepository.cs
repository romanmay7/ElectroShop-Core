using System;
using System.Collections.Generic;
using ElectroShop_Core.Data.Entities;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.Data
{
    public interface IElectroShopRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);

        bool SaveAll();
        void AddEntity(object model);
        void AddOrder(Order newOrder);
    }
}

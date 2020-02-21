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
        IEnumerable<Order> GetAllOrdersByUser(string user_id, bool includeItems);
        Order GetOrderById( int id);

        bool SaveAll();
        void AddEntity(object model);
        void AddOrder(Order newOrder);
        IEnumerable<Review> GetReviewsByProductId(int id);
        void AddReview(Review model);
    }
}

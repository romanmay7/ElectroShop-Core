using ElectroShop_Core.Data;
using ElectroShop_Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.ViewModels
{
    //This "OrderViewModel" is used to validate and recieve the Order Data
    //posted from the Front End,before it will be stored in DB as actual "Order"
    public class OrderViewModel
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        [Required]
        [MinLength(4)]
        public string OrderNumber { get; set; }

        public ICollection<OrderItemViewModel> Items { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.Data.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public string ReviewerName { get; set; }
        public DateTime Date { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }

        public string Email { get; set; }

        public virtual Product Product { get; set; }
    }
}

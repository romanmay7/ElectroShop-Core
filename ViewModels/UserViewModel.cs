using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.ViewModels
{
    public class UserViewModel
    {
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string userName { get; set; }
        [Required]
        public string email { get; set; }

        [Required]
        [MinLength(6)]
        public string password { get; set; }

    }
}
using ElectroShop_Core.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.Controllers
{
    public class AppController : Controller
    {
        
        private readonly IElectroShopRepository _repostory;

        public AppController(IElectroShopRepository repostory)
        {
            _repostory = repostory;
        }
        public IActionResult Shop()
        {
            var results = _repostory.GetAllProducts();
            return View(results);
        }

    }
}

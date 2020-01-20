using ElectroShop_Core.Data;
using ElectroShop_Core.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.Controllers
{
    // Controller which  exposing API endpoints for Products entities
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ProductsController : Controller
    {
        private readonly IElectroShopRepository _repository;
        private readonly ILogger<ProductsController> _logger;
        public ProductsController(IElectroShopRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        //[HttpGet]
        //public IEnumerable<Product> Get()
        //{

        //    return _repository.GetAllProducts();
        //}
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Product>> Get()
        {
            try
            {
                return Ok(_repository.GetAllProducts());
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get products:{ex}");
                return BadRequest("Bad request");
            }
        }
    }
}

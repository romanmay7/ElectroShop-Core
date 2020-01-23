using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ElectroShop_Core.Data;
using ElectroShop_Core.Data.Entities;
using ElectroShop_Core.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.Controllers
{

    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController : Controller
    {
        private readonly IElectroShopRepository _repository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<StoreUser> _userManager;

        public OrdersController(IElectroShopRepository repository, ILogger<OrdersController> logger, IMapper mapper, UserManager<StoreUser> userManager)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;

        }
        //Get Orders List from DB
        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get(bool includeItems = true)
        {
            try
            {
                var username = User.Identity.Name;
                var results = _repository.GetAllOrdersByUser(username, includeItems);

                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(_repository.GetAllOrders(includeItems)));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get orders:{ex}");
                return BadRequest("Bad request");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id, bool includeItems = true)
        {
            try
            {
                var username = User.Identity.Name;
                var results = _repository.GetAllOrdersByUser(username, includeItems);

                var order = _repository.GetOrderById(username, id);
                if (order != null)
                {
                    //using IMapper to map Order OrderViewModel,because we always want to return a view model
                    return Ok(_mapper.Map<Order, OrderViewModel>(order));
                }
                else return NotFound();

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get orders:{ex}");
                return BadRequest("Bad request");
            }
        }
        //Add  New Order to DB
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]OrderViewModel model)
        {
            
            try
            {
                _logger.LogError($"Model:{model}");
                if (ModelState.IsValid)
                {
                    // "OrderViewModel" is used to validate and recieve the Order Data
                    //posted from the Front End,before it will be stored in DB as actual "Order"

                    //Mapping  "OrderViewModel" to "Order"
                    var newOrder = _mapper.Map<OrderViewModel, Order>(model);


                    //if they didn't specify the date
                    if (newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }


                    //ADDING TO REPOSITORY

                    // _repository.AddEntity(newOrder);
                     _repository.AddOrder(newOrder);

                    //mapping  back from OrderModel to OrderViewModel,using IMapper 
                    //Returning our View Model with 201 code


                    var vm = _mapper.Map<Order, OrderViewModel>(newOrder);

                    if (_repository.SaveAll())
                    {
                        return Created($"/api/orders/{vm.OrderID}", vm); //"Created" matching 201 code
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new order:{ex}");
            }

            return BadRequest("Failed to save new order");

        }

    }
}

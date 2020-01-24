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
using Microsoft.AspNetCore.Http;

namespace ElectroShop_Core.Controllers
{

    [Route("api/[Controller]")]
    public class ReviewsController : Controller
    {
        private readonly IElectroShopRepository _repository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;


        public ReviewsController(IElectroShopRepository repository, ILogger<OrdersController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
     

        }
        //Get Reviews List for Product  from DB


        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                
                var review = _repository.GetReviewsByProductId(id);
                if (review != null)
                {
                    
                    return Ok(review);
                }
                else return NotFound();

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get reviews:{ex}");
                return BadRequest("Bad request");
            }
        }
        //Add  New Review to DB
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Review model)
        //public async Task<IActionResult> Post([FromForm] FormCollection model)
        {

            try
            {
                //Review model = new Review();
                //model.ReviewerName = request["reviewer_name"];
                //model.Content = request["content"];
                //model.Email= request["email"];
                //model.Rating = Int32.Parse(request["rating"]);

                _logger.LogError($"Model:{model}");
                if (ModelState.IsValid)
                {

                    //if on Front End ,they didn't specify the date
                    if (model.Date == DateTime.MinValue)
                    {
                        model.Date = DateTime.Now;
                    }


                    //ADDING TO REPOSITORY

                    _repository.AddReview(model);


                    if (_repository.SaveAll())
                    {
                        return Created($"/api/reviews/{model.Id}", model); //"Created" matching 201 code
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new review:{ex}");
            }

            return BadRequest("Failed to save new review");

        }

    }
}

using AutoMapper;
using ElectroShop_Core.Data;
using ElectroShop_Core.Data.Entities;
using ElectroShop_Core.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectroShop_Core.Data
{
    //AutoMapper service will look in Project for AutoMapper Profiles to use.Let's define it here
    public class ElectroShopMappingProfile : Profile
    {
        public ElectroShopMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderID, ex => ex.MapFrom(o => o.Id))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
              .ReverseMap();
        }
    }
}

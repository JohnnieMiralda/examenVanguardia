using FinancialApp.API.Models;
using FinancialApp.Core.Interfaces.IAccountService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialApp.API.Controllers
{
    public class AccountsController : ControllerBase
    {
        private readonly IAccountService accountService;
        public IActionResult Index()
        {
          
        }
    }
}

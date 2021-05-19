using FinancialApp.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinancialApp.Core.Interfaces
{
    class IAccountService
    {
        ServiceResult<IEnumerable<Core.Entities.Account>> GetAllAccounts();
    }
}

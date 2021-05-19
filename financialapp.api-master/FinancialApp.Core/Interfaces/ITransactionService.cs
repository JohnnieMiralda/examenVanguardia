using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Interfaces
{
    class ITransactionService
    {
        ServiceResult<IEnumerable<Core.Entities.Transaction>> GeAllTransactions();
    }
}

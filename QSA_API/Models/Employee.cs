using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Employee
    {
        public int Id { set; get; }
        public int BranchId { set; get; }
        public string Name { set; get; }
        public string Email { set; get; }
    }
}
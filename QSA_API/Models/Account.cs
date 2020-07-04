using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int empolyeeId { get; set; }
        public int ministryId { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string accountType { get; set; }
    }
}
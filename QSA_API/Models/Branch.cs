using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Branch
    {
        public int branchId { get; set; }
        public int ministryId { get; set; }
        public string branchName { get; set; }
        public Decimal longitude{ get; set; }
        public Decimal latitude { get; set; }
        public string workingHours { get; set; }
        public string address { get; set; }



    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Queue
    {
        public int queueId { get; set; }
        public int serviceId { get; set; }
        public int branchId { get; set; }
        public string startTime { get; set; }


    }
}
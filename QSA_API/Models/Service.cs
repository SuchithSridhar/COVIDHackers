using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Service
    {
        public int serviceId { get; set; }
        public int branchId { get; set; }
        public string serviceName { get; set; }
        public Boolean enableToQueue { get; set; }
        public Boolean enableToAppointment { get; set; }

    }
}
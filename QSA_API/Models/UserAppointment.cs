using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class UserAppointment
    {
        public int userAppointmentId { get; set; }
        public int userId { get; set; }
        public int ministryId { get; set; }
        public int branchId { get; set; }
        public int serviceId { get; set; }
        public string Time { get; set; }
        public string appointmentStatus { get; set; }



    }
}
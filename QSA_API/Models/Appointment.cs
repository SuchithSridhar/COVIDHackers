using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Appointment
    {
        public int appointmentId { get; set; }
        public int branchId { get; set; }
        public string allowedBookingTime { get; set; }
        public string bookingInterval { get; set; }
        public string preBookingInterval { get; set; }


    }
}
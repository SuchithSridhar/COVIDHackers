using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class User
    {
        public int userId { get; set; }
        public string userName { get; set; }
        public long civilId { get; set; }
        public string email { get; set; }

    }
}
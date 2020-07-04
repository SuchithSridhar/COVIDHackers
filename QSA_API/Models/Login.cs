using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class Login
    {
        public int Id { set; get; }
        public string UserName { set; get; }
        public string Password { set; get; }
    }

}
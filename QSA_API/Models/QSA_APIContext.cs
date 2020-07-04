using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace QSA_API.Models
{
    public class QSA_APIContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public QSA_APIContext() : base("name=QSA_APIContext")
        {
        }

        public System.Data.Entity.DbSet<QSA_API.Models.Login> Logins { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Account> Accounts { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Appointment> Appointments { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Branch> Branches { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Employee> Employees { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Ministry> Ministries { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Queue> Queues { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.Service> Services { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.User> Users { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.UserAppointment> UserAppointments { get; set; }

        public System.Data.Entity.DbSet<QSA_API.Models.UserQueue> UserQueues { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using QSA_API.Models;

namespace QSA_API.Controllers
{
    public class UserAppointmentsController : ApiController
    {
        private QSA_APIContext db = new QSA_APIContext();

        // GET: api/UserAppointments
        public IQueryable<UserAppointment> GetUserAppointments()
        {
            return db.UserAppointments;
        }

        // GET: api/UserAppointments/5
        [ResponseType(typeof(UserAppointment))]
        public IHttpActionResult GetUserAppointment(int id)
        {
            UserAppointment userAppointment = db.UserAppointments.Find(id);
            if (userAppointment == null)
            {
                return NotFound();
            }

            return Ok(userAppointment);
        }

        // PUT: api/UserAppointments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserAppointment(int id, UserAppointment userAppointment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userAppointment.userAppointmentId)
            {
                return BadRequest();
            }

            db.Entry(userAppointment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAppointmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserAppointments
        [ResponseType(typeof(UserAppointment))]
        public IHttpActionResult PostUserAppointment(UserAppointment userAppointment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserAppointments.Add(userAppointment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userAppointment.userAppointmentId }, userAppointment);
        }

        // DELETE: api/UserAppointments/5
        [ResponseType(typeof(UserAppointment))]
        public IHttpActionResult DeleteUserAppointment(int id)
        {
            UserAppointment userAppointment = db.UserAppointments.Find(id);
            if (userAppointment == null)
            {
                return NotFound();
            }

            db.UserAppointments.Remove(userAppointment);
            db.SaveChanges();

            return Ok(userAppointment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserAppointmentExists(int id)
        {
            return db.UserAppointments.Count(e => e.userAppointmentId == id) > 0;
        }
    }
}
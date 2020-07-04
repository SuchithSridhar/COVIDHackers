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
    public class MinistriesController : ApiController
    {
        private QSA_APIContext db = new QSA_APIContext();

        // GET: api/Ministries
        public IQueryable<Ministry> GetMinistries()
        {
            return db.Ministries;
        }

        // GET: api/Ministries/5
        [ResponseType(typeof(Ministry))]
        public IHttpActionResult GetMinistry(int id)
        {
            Ministry ministry = db.Ministries.Find(id);
            if (ministry == null)
            {
                return NotFound();
            }

            return Ok(ministry);
        }

        // PUT: api/Ministries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMinistry(int id, Ministry ministry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ministry.ministryId)
            {
                return BadRequest();
            }

            db.Entry(ministry).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MinistryExists(id))
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

        // POST: api/Ministries
        [ResponseType(typeof(Ministry))]
        public IHttpActionResult PostMinistry(Ministry ministry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Ministries.Add(ministry);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ministry.ministryId }, ministry);
        }

        // DELETE: api/Ministries/5
        [ResponseType(typeof(Ministry))]
        public IHttpActionResult DeleteMinistry(int id)
        {
            Ministry ministry = db.Ministries.Find(id);
            if (ministry == null)
            {
                return NotFound();
            }

            db.Ministries.Remove(ministry);
            db.SaveChanges();

            return Ok(ministry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MinistryExists(int id)
        {
            return db.Ministries.Count(e => e.ministryId == id) > 0;
        }
    }
}
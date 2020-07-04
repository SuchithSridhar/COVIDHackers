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
    public class UserQueuesController : ApiController
    {
        private QSA_APIContext db = new QSA_APIContext();

        // GET: api/UserQueues
        public IQueryable<UserQueue> GetUserQueues()
        {
            return db.UserQueues;
        }

        // GET: api/UserQueues/5
        [ResponseType(typeof(UserQueue))]
        public IHttpActionResult GetUserQueue(int id)
        {
            UserQueue userQueue = db.UserQueues.Find(id);
            if (userQueue == null)
            {
                return NotFound();
            }

            return Ok(userQueue);
        }

        // PUT: api/UserQueues/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserQueue(int id, UserQueue userQueue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userQueue.userQueueId)
            {
                return BadRequest();
            }

            db.Entry(userQueue).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserQueueExists(id))
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

        // POST: api/UserQueues
        [ResponseType(typeof(UserQueue))]
        public IHttpActionResult PostUserQueue(UserQueue userQueue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserQueues.Add(userQueue);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userQueue.userQueueId }, userQueue);
        }

        // DELETE: api/UserQueues/5
        [ResponseType(typeof(UserQueue))]
        public IHttpActionResult DeleteUserQueue(int id)
        {
            UserQueue userQueue = db.UserQueues.Find(id);
            if (userQueue == null)
            {
                return NotFound();
            }

            db.UserQueues.Remove(userQueue);
            db.SaveChanges();

            return Ok(userQueue);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserQueueExists(int id)
        {
            return db.UserQueues.Count(e => e.userQueueId == id) > 0;
        }
    }
}
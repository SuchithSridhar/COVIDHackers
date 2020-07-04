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
    public class QueuesController : ApiController
    {
        private QSA_APIContext db = new QSA_APIContext();

        // GET: api/Queues
        public IQueryable<Queue> GetQueues()
        {
            return db.Queues;
        }

        // GET: api/Queues/5
        [ResponseType(typeof(Queue))]
        public IHttpActionResult GetQueue(int id)
        {
            Queue queue = db.Queues.Find(id);
            if (queue == null)
            {
                return NotFound();
            }

            return Ok(queue);
        }

        // PUT: api/Queues/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQueue(int id, Queue queue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != queue.queueId)
            {
                return BadRequest();
            }

            db.Entry(queue).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QueueExists(id))
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

        // POST: api/Queues
        [ResponseType(typeof(Queue))]
        public IHttpActionResult PostQueue(Queue queue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Queues.Add(queue);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = queue.queueId }, queue);
        }

        // DELETE: api/Queues/5
        [ResponseType(typeof(Queue))]
        public IHttpActionResult DeleteQueue(int id)
        {
            Queue queue = db.Queues.Find(id);
            if (queue == null)
            {
                return NotFound();
            }

            db.Queues.Remove(queue);
            db.SaveChanges();

            return Ok(queue);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QueueExists(int id)
        {
            return db.Queues.Count(e => e.queueId == id) > 0;
        }
    }
}
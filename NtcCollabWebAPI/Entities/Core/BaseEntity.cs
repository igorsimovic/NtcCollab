using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NtcCollabWebAPI.Entities
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public DateTime CreatedUtc { get; set; }
        public DateTime ModifiedUtc { get; set; }
    }
}

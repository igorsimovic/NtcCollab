using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace NtcCollabWebAPI.Entities
{
    public class NtcCollabDbContext : IdentityDbContext
    {
        public NtcCollabDbContext(DbContextOptions<NtcCollabDbContext> options) : base(options)
        {
        }
    }
}

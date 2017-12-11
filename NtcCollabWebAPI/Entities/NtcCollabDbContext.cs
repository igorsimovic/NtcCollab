using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Threading;

namespace NtcCollabWebAPI.Entities
{
    public class NtcCollabDbContext : IdentityDbContext<ApplicationUser>
    {
        public NtcCollabDbContext(DbContextOptions<NtcCollabDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }


        public DbSet<Exercise> Exercises { get; set; }

        public override int SaveChanges()
        {
            AddTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            AddTimestamps();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        private void AddTimestamps()
        {
            var entities = ChangeTracker.Entries().Where(x => (x.Entity is BaseEntity || x.Entity is ApplicationUser) &&
                                                        (x.State == EntityState.Added || x.State == EntityState.Modified));

            foreach (var entity in entities)
            {
                if (entity.State == EntityState.Added)
                {
                    if (entity.Entity is BaseEntity)
                    {
                        ((BaseEntity)entity.Entity).CreatedUtc = DateTime.UtcNow;
                    }
                    else if (entity.Entity is ApplicationUser)
                    {
                        ((ApplicationUser)entity.Entity).CreatedUtc = DateTime.UtcNow;
                    }
                }

                if (entity.Entity is BaseEntity)
                {
                    ((BaseEntity)entity.Entity).ModifiedUtc = DateTime.UtcNow;
                }
                else if (entity.Entity is ApplicationUser)
                {
                    ((ApplicationUser)entity.Entity).ModifiedUtc = DateTime.UtcNow;
                }
            }
        }
    }
}

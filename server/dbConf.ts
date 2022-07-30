const dbCreds  = {
    applicationName: "Ecommerce",
    hostname: "ecom.postgres.database.azure.com",
    connection: {
      attempts: 1,
    },
    database: "postgres",
    host_type: "tcp"  as "tcp" | "socket" | undefined,
    user: "postgres",
    password: "admin-311",
    port: 5432,
};

export {dbCreds};
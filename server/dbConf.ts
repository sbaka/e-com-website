import "https://deno.land/x/dotenv@v3.2.0/load.ts";

const dbCreds  = {
    applicationName: "Ecommerce",
    hostname: Deno.env.get("DBHOST"),
    connection: {
      attempts: 1,
    },
    database: "postgres",
    host_type: "tcp"  as "tcp" | "socket" | undefined,
    user: Deno.env.get("DBUSER"),
    password: Deno.env.get("DBPWD"),
    port: 5432,
};

export {dbCreds};
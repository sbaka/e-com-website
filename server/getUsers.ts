import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";
import { dbCreds } from "./dbConf.ts";
// import { User } from "./models.ts";

const client = new Client(dbCreds);

const checkUser = async ({
  params,
  response,
}: {
  params: { email: string; password: string };
  response: any;
}) => {
  try {
    await client.connect();
    response.headers.set("Access-Control-Allow-Origin", "*");
    // console.log(params.email)
    const queryString = `Select * from users where email = \'${params.email}\' and pwd = \'${params.password}\'`;
    // console.log(queryString)
    const queryRes = await client.queryArray(queryString);
    if (queryRes.rows.toString() === "") {
      response.status = 404;
      response.body = {
        success: false,
        msg: "E-mail ou mot de passe incorrect",
      };
    } else {
      response.status = 200;
      response.body = {
        success: true,
        body: queryRes.rows,
      };
    }

    // console.log(queryRes.rows)
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  } finally {
    client.end();
  }
};

const getUsers = async ({ response }: { response: any }) => {
  try {
    await client.connect();
    response.headers.set("Access-Control-Allow-Origin", "*");
    const queryRes = await client.queryArray("SELECT * FROM USERS LIMIT 10;");
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.body = {
      success: true,
      body: queryRes.rows,
    };
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  } finally {
    await client.end();
  }
};

export { getUsers, checkUser };

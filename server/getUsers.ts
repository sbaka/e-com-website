import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";
import { User } from "../my-app/src/models/models.ts";
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

const addUser = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const temp: User = await body.value; // get the body
  const user: User = JSON.parse(temp.toString()); // parse it from json cuz it doesnt work otherwise
  // console.log(user)
  //if the request has no body (which should have always) then its fine
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    try {
      //connecting to database
      await client.connect();
      //checking if the user.email has an account already
      const queryRes = await client.queryArray(
        `Select * from users where email = \'${user.email}\'`
      );
      //if the query has content then process it
      if (queryRes.rows.toString() != "") {
        response.status = 409;
        response.body = {
          success: false,
          msg: "account already existent",
        };
      } else {
        const query =
          "INSERT INTO USERS(adress, email, username, pwd, age, phone, picture)" +
          "VALUES(" +
          "'','" +
          user.email +
          "','" +
          user.user +
          "','" +
          user.password +
          "',1,'0363636363','1'" + //age, phone,picture
          ")";

        console.log(query);

        const result = await client.queryArray(query);
        //logging the querry if the querry isn't null
        result ?? console.log("query executed" + query);
        response.status = 201;
        response.body = {
          success: true,
          msg: "Account added successfully",
        };
      }
    } catch (err) {
      (response.status = 500),
        (response.body = {
          success: false,
          msg: err.toString(),
        });
    } finally {
      await client.end();
    }
  }
};
export { getUsers, checkUser, addUser };

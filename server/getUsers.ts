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
  //allowing posts and rquests from everywhere
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  //if the request has no body (which should have always) send the following response
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
      const body = await request.body(); // get the body of the request
      const user: User = await body.value; // set The user Var so the data gets structured

      const getMail = await client.queryArray(
        `Select * from users where email = \'${user.email}\'`
      );

      //if the query has content then process it
      if (getMail.rows.toString() != "") {
        response.status = 409;
        response.body = {
          success: false,
          msg: "Email already existent",
        };
      } else {
        const getUserName = await client.queryArray(
          `Select * from users where username = \'${user.user}\'`
        );
        // console.log(getUserName.rows);
        if (getUserName.rows.toString() != "") {
          response.status = 409;
          response.body = {
            success: false,
            msg: "Username already existent",
          };
        } else {
          //if the email and the username doesn't already exist  then proceed and add it to the db
          const query =
            "INSERT INTO USERS(adress, email, username, pwd, age, phone, picture)" +
            "VALUES(" +
            "'','" +
            user.email +
            "','" +
            user.user +
            "','" +
            `${user.password}` +
            "',1,'','1'" + //age, phone,picture
            ")";

          //console.log(query);

          const result = await client.queryArray(query);

          result ?? console.log("query executed" + query); //logging the querry if the querry isn't null (the ?? checks if a var is null)
          response.status = 201;
          response.body = {
            success: true,
            msg: "Account added successfully",
          };
        }
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

import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
// import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from "./routes.ts";
const port = 6969;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
// app.use(
//   oakCors({
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   })
// );

console.log(`Server Running on port ${port}`);

await app.listen({ port });

import {Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import router from "./routes.ts"
const port = 6969;

const app = new Application();

app.use(router.routes());
app.use( router.allowedMethods());

console.log(`Server Running on port ${port}`)

await app.listen({port});
import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { getUsers, checkUser, addUser } from "./getUsers.ts";
const router = new Router();

router.get("/users", getUsers).get("/users/:email/:password", checkUser);
router.post("/user", addUser);
export default router;

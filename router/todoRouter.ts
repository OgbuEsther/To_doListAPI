import { Router } from "express";
import {
  getAll,
  oneGet,
  postTasks,
  removeOne,
  update,
} from "../controller/todoController";

const router = Router();

router.route("/alltasks").get(getAll);
router.route("/onetasks/:id").get(oneGet);
router.route("/newtasks").post(postTasks);
router.route("/updatetasks").patch(update);
router.route("/removetasks").delete(removeOne);

export default router;

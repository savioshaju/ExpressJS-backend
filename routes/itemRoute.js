import { Router } from "express";
import { addNewItem } from "../controllers/itemControllers.js";
import { checkItem } from "../middlewares/itemMiddlewares.js";
import { getAllItems } from "../controllers/itemControllers.js";
const router = Router()

router.route('/').post(checkItem,addNewItem)
router.route('/').get(getAllItems)

export default router
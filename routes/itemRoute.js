import { Router } from "express";
import { addNewItem, getItemsById } from "../controllers/itemControllers.js";
import { checkItem } from "../middlewares/itemMiddlewares.js";
import { getAllItems } from "../controllers/itemControllers.js";
const router = Router()

router.route('/').post(checkItem,addNewItem)
router.route('/allitems').get(getAllItems)
router.route('/getbyid/:id').get(getItemsById)

export default router
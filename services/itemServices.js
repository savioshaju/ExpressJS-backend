import { Item } from "../models/itemModel.js"
export const createitemServices = async (itemDetails) => {
    try {
        const item = await Item.create(itemDetails)
        console.log(item)
    } catch (error) {
        console.log(error)
    }
}
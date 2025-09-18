import { Item } from "../models/itemModel.js"
export const createitemServices = async (itemDetails) => {
    try {
        const item = await Item.create(itemDetails)
        console.log(item)
        return item
    } catch (error) {
        console.log(error)
    }
}

export const getAllItemServices = async ()=>{
    try {
        return await Item.find({})
    } catch (error) {
         console.log(error)
    }
}

export const getItemByIdServices = async (id)=>{
    try {
        return await Item.findById(id)
    } catch (error) {
         console.log(error)
    }
}
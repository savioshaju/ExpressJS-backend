import { json } from "express";
import { statusCodes } from "../helpers/userHelper.js";
import { createitemServices } from "../services/itemServices.js";

export const addNewItem = async (req, res) => {
    try {
        const { name, quantity, price } = req.body
        const payload = { name, quantity, price };
        const response = createitemServices(payload)
        if (!response) {
            const status = statusCodes.find((item) => item.code === 500)
            return res.status(status.code).json({ sucess: false, message: "Failed creating item" })
        }
        const status = statusCodes.find((item) => item.code === 201)
        res.status(status.code).json({ sucess: true, message: status.message })

    } catch (error) {
        const status = statusCodes.find((item) => item.code === 500)
        res.status(status.code).json({ sucess: false, message: status.message })
    }

}


export const getAllItems = ((req, res) => {
    try {

    } catch (error) {
        const status = statusCodes.find((item) => item.code === 500)
        res.status(status.code).json({ sucess: false, message: status.message })
    }
})
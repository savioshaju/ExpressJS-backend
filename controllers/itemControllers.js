import { statusCodes } from "../helpers/userHelper.js";
import {   createitemServices, getAllItemServices, getItemByIdServices } from "../services/itemServices.js";

// CREATE ITEM
export const addNewItem = async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        const payload = { name, quantity, price };

        const response = await createitemServices(payload);
        if (!response) {
            const status = statusCodes.find((item) => item.code === 500);
            return res.status(status.code).json({ success: false, message: "Failed creating item" });
        }

        const status = statusCodes.find((item) => item.code === 201);
        res.status(status.code).json({ success: true, message: status.message, item: response });

    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({ success: false, message: "Error adding new item" });
    }
};


export const getAllItems = async (req, res) => {
    try {
        const response = await getAllItemServices();

        if (!response || response.length === 0) {
            const status = statusCodes.find((item) => item.code === 404);
            return res.status(status.code).json({ success: false, message: "No items found" });
        }

        const status = statusCodes.find((item) => item.code === 200);
        res.status(status.code).json({ success: true, message: status.message, items: response });

    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({ success: false, message: "Error fetching items" });
    }
};

export const getItemsById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getItemByIdServices(id);

        if (!response) {
            const status = statusCodes.find((item) => item.code === 404);
            return res.status(status.code).json({ success: false, message: "Item not found" });
        }

        const status = statusCodes.find((item) => item.code === 200);
        res.status(status.code).json({ success: true, message: status.message, item: response });

    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({ success: false, message: "Error fetching item by ID" });
    }
};

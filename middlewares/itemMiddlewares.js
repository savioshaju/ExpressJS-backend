import { statusCodes } from "../helpers/userHelper.js";

export const checkItem = (req, res, next) => {
    const { name, quantity, price } = req.body;
    const status = statusCodes.find((item) => item.code === 400);

    let missingFields = "";
    if (!name) missingFields += "name ";
    if (!quantity) missingFields += "quantity ";
    if (!price) missingFields += "price ";

    if (missingFields) {
        return res.status(status.code).json({
            success: false,
            message: "Missing fields: " + missingFields.trim() + " - " + status.message
        });
    }

    next();
};

//contact ROUTE
import nc from "next-connect";
import ncoptions from "@/config/ncoptions";
import axios from "axios";
import FormData from "form-data";

const handler = nc(ncoptions);

// MIDDLEWARE;
handler.use(async (req, res, next) => {
    next();
});

handler.post(async (req, res) => {
    const { data } = req.body;
    const { firstName, lastName, email, phone, company, message } = data;
    console.log(data);

    const parsedData = {
        name: firstName,
        // lastName,
        email,
        // phone,
        // company,
        message,
    };

    try {
        //convert parsedData to form data
        const formData = new FormData();
        for (const key in parsedData) {
            formData.append(key, parsedData[key]);
        }

        //send parsedData to email

        res.status(200).json({ message: "success" });
        //send parsedData to google sheets
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
});

export default handler;

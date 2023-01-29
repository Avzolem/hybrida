//contact ROUTE
import nc from "next-connect";
import ncoptions from "@/config/ncoptions";
import axios from "axios";
import FormData from "form-data";
const nodemailer = require("nodemailer");

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
        firstName,
        lastName,
        email,
        phone,
        company,
        message,
    };

    try {
        //send parsedData to email
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const template = `
          <p><strong>Nombre</strong>: ${firstName}</p>
          </br>  
          <p><strong>Apellido</strong>: ${lastName}</p>
          </br>  
          <p><strong>Email</strong>: ${email}</p>
          </br>  
          <p><strong>Telefono</strong>: ${phone}</p>
          </br>  
          <p><strong>Escuela/Organizacion</strong>: ${company}</p>
          </br>  
          <p><strong>Mensaje</strong>: ${message}</p>
          </br> 
        `;

        let info = await transporter.sendMail({
            from: "hybrida@uach.mx", // sender address
            to: "hybrida@uach.mx", // list of receivers
            subject: "Nuevo Registro Hybrida Uach ✔", // Subject line
            html: template,
        });

        console.log("Message sent: %s", info.messageId);

        res.status(200).json({ message: "success" });
        //send parsedData to google sheets
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
});

export default handler;

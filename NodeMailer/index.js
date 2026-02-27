let express = require('express')
let nodemailer = require('nodemailer')

let app = express()
app.listen(5000);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use true for port 465, false for port 587
    auth: {
        user: "kakadiyachiranj044@gmail.com",
        pass: "omnulascxyrssljh",
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
        console.log("Server is ready to send messages");
    }
});

app.get("/sendmail", async (req, res) => {
    try {

        const mailOptions = {
            from: '"Kakadiya Chiranj" <kakadiyachiranj044@gmail.com>',
            to: "ckakadiya353@rku.ac.in, pandhani310@rku.ac.in",
            cc: "cc",
            bcc: "bcc",
            subject: "Hello ✔",
            // text: "Hello world?",
            html: "<h1>Hello world?</h1>",
            // attachments: [
            //     {
            //         filename: "admission.pdf",
            //         path: "./uploads/admission.pdf"
            //     }
            // ]
        }

        let info = await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        console.log(info);
    }
    catch {
        res.json({ "msg": "Failed to send mail" });
    }
})
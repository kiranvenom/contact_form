const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.static('Public'));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Public/index.html');
});

app.post('/', (req, res) => {
	// console.log(req.body);

	const tranporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.User,
			pass: process.env.Pass,
		},
	});
	const mailOptions = {
		from: req.body.mail,
		to: 'km060360@gmail.com',
		subject: `${req.body.subject}`,
		text: `User Name: ${req.body.fullName}\n User mailId: ${req.body.mail}\n User Subject: ${req.body.subject}\n User Message: ${req.body.message}`,
	};
	tranporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			// console.log('email sent' + info.response);
			res.send('success');
		}
	});
});

app.listen(PORT, () => {
	console.log(`server running in port ${PORT}`);
});

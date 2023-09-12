const contactForm = document.querySelector('.contact-form');
const fullName = document.getElementById('name');
const mail = document.getElementById('mail');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const sendMessageButton = document.getElementById('sendMessage');

let isSending = false;

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (isSending) {
		return;
	}

	isSending = true;
	sendMessageButton.disabled = true;
	sendMessageButton.style.cursor = 'not-allowed';

	let formData = {
		fullName: fullName.value,
		mail: mail.value,
		subject: subject.value,
		message: message.value,
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function () {
		isSending = false;
		sendMessageButton.disabled = false;
		sendMessageButton.style.cursor = 'pointer'; 

		console.log(xhr.responseText);
		if (xhr.responseText == 'success') {
			alert('email sent');
			fullName.value = '';
			mail.value = '';
			subject.value = '';
			message.value = '';
		} else {
			alert('something went wrong');
		}
	};
	xhr.send(JSON.stringify(formData));
});

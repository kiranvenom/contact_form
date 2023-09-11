const contaccrForm = document.querySelector('.contact-form');
const fullName = document.getElementById('name');
const mail = document.getElementById('mail');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

contaccrForm.addEventListener('submit', (e) => {
	e.preventDefault();
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

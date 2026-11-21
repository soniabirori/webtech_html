function getEmailError(input) {
	const email = input.value.trim();
	if (!email) {
		return "Please enter your email address.";
	}
	const emailPattern = /^[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i;
	const localPart = email.split("@")[0];
	return email.length <= 254 && localPart.length <= 64 && emailPattern.test(email)
		? ""
		: "Enter a complete email address, for example you@example.com.";
}

function hasVisibleCharacters(value) {
	return /[\p{L}\p{N}]/u.test(value);
}

function getContactFields(form) {
	return [
		{
			input: form.querySelector("#name"),
			error: form.querySelector("#nameError"),
			validate(value) {
				if (value.length < 2) {
					return "Enter your name (at least 2 characters).";
				}
				if (value.length > 80) {
					return "Your name must be 80 characters or fewer.";
				}
				return /^(?=.*\p{L})[\p{L}\p{M} .'\u2019-]+$/u.test(value)
					? ""
					: "Use letters, spaces, apostrophes, periods, or hyphens in your name.";
			},
		},
		{
			input: form.querySelector("#email"),
			error: form.querySelector("#emailError"),
			validate(value, input) {
				return getEmailError(input);
			},
		},
		{
			input: form.querySelector("#subject"),
			error: form.querySelector("#subjectError"),
			validate(value) {
				if (value.length < 3) {
					return "Enter a subject (at least 3 characters).";
				}
				if (value.length > 120) {
					return "Your subject must be 120 characters or fewer.";
				}
				return hasVisibleCharacters(value)
					? ""
					: "Include at least one letter or number in your subject.";
			},
		},
		{
			input: form.querySelector("#message"),
			error: form.querySelector("#messageError"),
			validate(value) {
				if (value.length < 10) {
					return "Enter a message of at least 10 characters.";
				}
				if (value.length > 2000) {
					return "Your message must be 2,000 characters or fewer.";
				}
				return hasVisibleCharacters(value)
					? ""
					: "Include at least one letter or number in your message.";
			},
		},
	];
}

function updateContactField(field) {
	const errorMessage = field.validate(field.input.value.trim(), field.input);
	field.error.textContent = errorMessage;
	field.input.setAttribute("aria-invalid", errorMessage ? "true" : "false");
	field.input.setAttribute("aria-describedby", field.error.id);
	return !errorMessage;
}

document.addEventListener("DOMContentLoaded", function () {
	const contactForm = document.getElementById("contactForm");
	if (!contactForm) return;

	const fields = getContactFields(contactForm);
	const touchedFields = new Set();
	let submissionAttempted = false;

	fields.forEach(function (field) {
		field.input.addEventListener("blur", function () {
			touchedFields.add(field.input);
			updateContactField(field);
		});
	});

	contactForm.addEventListener("submit", function (event) {
		event.preventDefault();
		submissionAttempted = true;

		const invalidFields = fields.filter(function (field) {
			touchedFields.add(field.input);
			return !updateContactField(field);
		});

		const status = contactForm.querySelector("#formStatus");
		if (invalidFields.length) {
			status.textContent = "Please correct the highlighted fields and try again.";
			invalidFields[0].input.focus();
			return;
		}

		status.textContent = "Thanks for reaching out. Your message is ready to send!";
	});

	contactForm.addEventListener("input", function (event) {
		const field = fields.find(function (item) {
			return item.input === event.target;
		});
		if (field && (touchedFields.has(field.input) || submissionAttempted)) {
			updateContactField(field);
		}
		contactForm.querySelector("#formStatus").textContent = "";
	});
});

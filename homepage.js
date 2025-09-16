// Modal logic
	const loginModal = document.getElementById('loginModal');
	const closeModal = document.getElementById('closeModal');
	const loginType = document.getElementById('loginType');
	// Only target Login dropdown links
	// Improved dropdown logic for Login so sub-options remain visible
	document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
		if (btn.textContent.trim() === 'Login') {
			const loginDropdown = btn.parentElement.querySelector('.dropdown-content');
			if (loginDropdown) {
				// Show dropdown on click and keep open until mouse leaves
				btn.addEventListener('click', function(e) {
					e.preventDefault();
					loginDropdown.style.display = 'flex';
					loginDropdown.style.opacity = '1';
				});
				btn.addEventListener('mouseenter', function() {
					loginDropdown.style.display = 'flex';
					loginDropdown.style.opacity = '1';
				});
				loginDropdown.addEventListener('mouseleave', function() {
					loginDropdown.style.display = '';
					loginDropdown.style.opacity = '';
				});
				loginDropdown.querySelectorAll('a').forEach(link => {
					link.addEventListener('click', function(e) {
						if (this.textContent.trim() === 'Donor') {
							window.location.href = 'Donar survay/donarsurvery.html';
							return;
						}
						if (this.textContent.trim() === 'Doctor') {
							window.location.href = 'Doctor login/doctorlogin.html';
							return;
						}
						e.preventDefault();
						loginType.textContent = this.textContent + ' Login';
						loginModal.style.display = 'block';
						document.body.style.overflow = 'hidden';
						document.getElementById('login-email').focus();
						loginDropdown.style.display = '';
						loginDropdown.style.opacity = '';
					});
				});
			}
		}
	});

	// Contact Us Modal logic
	const contactModal = document.getElementById('contactModal');
	const closeContactModal = document.getElementById('closeContactModal');
	const contactMessage = document.getElementById('contactMessage');
	document.querySelectorAll('a[href="#contact"]').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			contactModal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.getElementById('contact-name').focus();
		});
	});
	closeContactModal.onclick = function() {
		contactModal.style.display = 'none';
		document.body.style.overflow = '';
	};
	window.addEventListener('click', function(event) {
		if (event.target == contactModal) {
			contactModal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && contactModal.style.display === 'block') {
			contactModal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

	// Contact form handler (frontend only)
	document.querySelector('.contact-form').onsubmit = function(e) {
		e.preventDefault();
		contactMessage.textContent = 'Thank you for your feedback!';
		setTimeout(() => {
			contactModal.style.display = 'none';
			document.body.style.overflow = '';
			contactMessage.textContent = '';
			this.reset();
		}, 1800);
	};
	closeModal.onclick = function() {
		loginModal.style.display = 'none';
		document.body.style.overflow = '';
	};
	window.onclick = function(event) {
		if (event.target == loginModal) {
			loginModal.style.display = 'none';
			document.body.style.overflow = '';
		}
	};
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && loginModal.style.display === 'block') {
			loginModal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

	// OTP Frontend Logic
	const sendOtpBtn = document.getElementById('sendOtpBtn');
	const verifyOtpBtn = document.getElementById('verifyOtpBtn');
	const otpMessage = document.getElementById('otpMessage');

	if (sendOtpBtn) {
		sendOtpBtn.onclick = async function() {
			const email = document.getElementById('login-email').value;
			otpMessage.textContent = '';
			if (!email) {
				otpMessage.textContent = 'Please enter your email.';
				return;
			}
			sendOtpBtn.disabled = true;
			sendOtpBtn.textContent = 'Sending...';
			try {
				const res = await fetch('/send_otp', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email })
				});
				const data = await res.json();
				otpMessage.textContent = data.message || 'OTP sent!';
			} catch (err) {
				otpMessage.textContent = 'Error sending OTP.';
			}
			sendOtpBtn.disabled = false;
			sendOtpBtn.textContent = 'Send OTP';
		};
	}

	if (verifyOtpBtn) {
		verifyOtpBtn.onclick = async function() {
			const otp = document.getElementById('login-otp').value;
			otpMessage.textContent = '';
			if (!otp) {
				otpMessage.textContent = 'Please enter the OTP.';
				return;
			}
			verifyOtpBtn.disabled = true;
			verifyOtpBtn.textContent = 'Verifying...';
			try {
				const res = await fetch('/verify_otp', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ otp })
				});
				const data = await res.json();
				otpMessage.textContent = data.message || (data.success ? 'OTP verified!' : 'Invalid OTP.');
			} catch (err) {
				otpMessage.textContent = 'Error verifying OTP.';
			}
			verifyOtpBtn.disabled = false;
			verifyOtpBtn.textContent = 'Verify OTP';
		};
	}
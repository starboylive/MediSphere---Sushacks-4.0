from flask import Flask, request, session, jsonify
from flask_mail import Mail, Message
import random
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'codenovabytex@gmail.com'
app.config['MAIL_PASSWORD'] = 'gkmo baza hmwz jjcm'
mail = Mail(app)

def generate_otp():
    return str(random.randint(100000, 999999))

@app.route('/send_otp', methods=['POST'])
def send_otp():
    try:
        email = request.json.get('email')
        otp = generate_otp()
        session['otp'] = otp
        msg = Message('Your OTP Code', sender=app.config['MAIL_USERNAME'], recipients=[email])
        msg.body = f'Your OTP is: {otp}'
        mail.send(msg)
        return jsonify({'message': 'OTP sent!'})
    except Exception as e:
        return jsonify({'message': f'Error: {str(e)}'}), 500

@app.route('/verify_otp', methods=['POST'])
def verify_otp():
    user_otp = request.json.get('otp')
    if session.get('otp') == user_otp:
        session.pop('otp', None)
        return jsonify({'success': True, 'message': 'OTP verified!'})
    return jsonify({'success': False, 'message': 'Invalid OTP.'})

if __name__ == '__main__':
    app.run(debug=True)

from flask_mail import Message
from flask import current_app
from ..extensions import mail
import os

def send_email(subject, body):
    try:
        msg = Message(
            subject=subject,
            sender=current_app.config["MAIL_DEFAULT_SENDER"],
            recipients=[current_app.config["MAIL_RECIPIENT"]],
            body=body
        )
        mail.send(msg)
        return True
    except Exception as e:
        current_app.logger.error(f"Error sending email: {e}")
        return False

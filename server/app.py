from flask import Flask, request
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

app.config.update(
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 465)),
    MAIL_USE_TLS=os.getenv("MAIL_USE_TLS", "False").lower() in ("true", "1"),
    MAIL_USE_SSL=os.getenv("MAIL_USE_SSL", "True").lower() in ("true", "1"),
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_DEFAULT_SENDER=os.getenv("MAIL_DEFAULT_SENDER"),
)
mail = Mail(app)

@app.route("/api/log_view", methods=["GET"])
def log_view():
    source = request.args.get("source")
    msg = Message(
        subject='Hello from the other side!', 
        sender=app.config['MAIL_DEFAULT_SENDER'],  
        recipients = [os.getenv("MAIL_RECIPIENT")]
    )
    msg.body = f"Hey, somebody from {source} viewed your portfolio!"
    mail.send(msg)
    return "Message sent!"

if __name__ == '__main__':
    app.run(debug=True)
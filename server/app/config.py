import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MAIL_SERVER = os.getenv("MAIL_SERVER", "smtp.gmail.com")
    MAIL_PORT = int(os.getenv("MAIL_PORT", 465))
    MAIL_USE_TLS = os.getenv("MAIL_USE_TLS", "False").lower() in ("true", "1")
    MAIL_USE_SSL = os.getenv("MAIL_USE_SSL", "True").lower() in ("true", "1")
    MAIL_USERNAME = os.getenv("MAIL_USERNAME")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
    MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER")
    MAIL_RECIPIENT = os.getenv("MAIL_RECIPIENT")

from flask import Blueprint, request, jsonify, current_app
from ..services.mail_service import send_email

portfolio_bp = Blueprint("portfolio", __name__)

@portfolio_bp.route("/log_view", methods=["GET", "OPTIONS"])
def log_view():
    source = request.args.get("source", "Unknown")
    subject = "Portfolio View Logged"
    body = f"Hey, somebody from {source} viewed your portfolio!"
    sent = send_email(subject, body)

    if sent:
        return jsonify({"status": "sent", "source": source}), 200
    return jsonify({"status": "failed"}), 500

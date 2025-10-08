from .portfolio import portfolio_bp

def register_blueprints(app):
    app.register_blueprint(portfolio_bp, url_prefix="/api")

from flask import Flask

def create_app():
    app = Flask(__name__)

    try:
        from dotenv import load_dotenv
        load_dotenv()
    except Exception:
        pass

    from .routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    return app

from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models
import auth

def seed_user():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    email = "omaressam7704@gmail.com"
    password = "12345678"
    
    user = db.query(models.User).filter(models.User.email == email).first()
    if user:
        print(f"User {email} already exists.")
    else:
        hashed_password = auth.get_password_hash(password)
        new_user = models.User(email=email, hashed_password=hashed_password)
        db.add(new_user)
        db.commit()
        print(f"User {email} created successfully.")
    
    db.close()

if __name__ == "__main__":
    seed_user()

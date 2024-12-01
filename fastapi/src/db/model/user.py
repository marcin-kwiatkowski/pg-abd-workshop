from sqlalchemy import Column, Integer, String

from db.database import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    login = Column(String, unique=True, index=True)
    first_name = Column('firstName', String())
    last_name = Column('lastName', String())

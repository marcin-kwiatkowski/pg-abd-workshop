from typing import List

from db.database import SessionLocal
from db.model.user import User
from users.user_entity import UserEntity


class UsersService:
    def get_users(self) -> List[UserEntity]:
        with SessionLocal() as session:
            query = session.query(User)
            db_users = query.all()
            return [UserEntity(
                id=db_user.id,
                login=db_user.login,
            ) for db_user in db_users]

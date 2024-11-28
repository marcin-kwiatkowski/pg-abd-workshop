from typing import List

from pydantic import BaseModel

from users.user_entity import UserEntity


class UserDTO(BaseModel):
    id: str
    login: str

    @staticmethod
    def from_entity(user: UserEntity):
        return UserDTO(
            id=user.id,
            login=user.login
        )


class UsersResponse(BaseModel):
    data: List[UserDTO]

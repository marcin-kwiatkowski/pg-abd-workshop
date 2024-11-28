from pydantic import BaseModel


class UserEntity(BaseModel):
    id: str
    login: str

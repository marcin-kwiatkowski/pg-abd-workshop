from fastapi import APIRouter

from users.dtos.users_response import UsersResponse, UserDTO
from users.users_service import UsersService

router = APIRouter()


@router.get('/users')
def get_users(users_service=UsersService()) -> UsersResponse:
    users = users_service.get_users()
    return UsersResponse(data=[UserDTO.from_entity(user) for user in users])

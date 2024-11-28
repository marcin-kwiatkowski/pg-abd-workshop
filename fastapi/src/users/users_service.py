from users.user_entity import UserEntity


class UsersService:
    def get_users(self) -> list[UserEntity]:
        return [UserEntity(
            id="f01fa941-1220-4ca6-a609-e284161d8ba0",
            login="m.kwiatkowski"
        )]

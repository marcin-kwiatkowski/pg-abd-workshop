import { useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "@/config";
import { User } from "@/users/types/User";
import { UserDTO } from "@/users/types/UserDTO";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    // API request: GET
    axios.get(`${ApiUrl}/api/users`).then((response) => {
      // Prepare a list of users from endpoint's response (list of UserDTOs)
      const list = response.data.map((userDto: UserDTO) => ({
        id: userDto.id,
        login: userDto.login,
      }));
      setUsers(list);
    });
  }, []);

  return {
    users,
  };
};

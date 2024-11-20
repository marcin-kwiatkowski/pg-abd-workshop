"use client";

import { useUsers } from "@/users/hooks/useUsers";

export const UsersPage = () => {
  const { users } = useUsers();

  return (
    <>
      {users == undefined ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.login}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

import { useState } from "react";
import { useDispatch } from "react-redux";
// import { deleteUser } from "../../API/api";
import { deleteUserR, getUsersR } from "../../API/api-mongo";


const Admin: React.FC = (props) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  
  
  async function getUsers() {
    const users = await getUsersR();
    setUsers(users.data);
  }
  async function deleteUser(id: number) {
    const response = await deleteUserR(id);
    setUsers(users.filter((user: any) => user._id !== id));
  }

  return (
    <div>
      <table>
        <thead >
          <tr >
            <th style={{ border: "2px solid #999", padding: 7 }}>login</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, id: number) => <UserItem user={user} id={id} deleteUser={deleteUser} />)}
        </tbody>
      </table>
      <button onClick={getUsers}>get</button>
    </div>
  )
}

export default Admin;

interface IPropsUserItem {
  id: number,
  user: any,
  deleteUser: any,
}
const UserItem: React.FC<IPropsUserItem> = (props) => {
  
  return (
    <tr key={props.id}>
      <td style={{ border: "2px solid #999", padding: 5, }}>{props.user.login}</td>
      <td>{props.user.password}</td>
      <td><button onClick={() => props.deleteUser(props.user._id)}>delete</button></td>
    </tr>
  )
}
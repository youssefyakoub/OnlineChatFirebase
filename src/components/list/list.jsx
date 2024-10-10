import ChatList from "./chatList/ChatList";
import "./list.css";
import UsersInfo from "./usersInfo/usersInfo";
const List = () => {
  return (
    <div className="list ">
      <UsersInfo />
      <ChatList />
    </div>
  );
};

export default List;

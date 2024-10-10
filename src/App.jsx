import List from "./components/list/list";
import Chats from "./components/chats/chats";
import Details from "./components/details/details";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useEffect } from "react";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  console.log(currentUser);
  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="container ">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chats />}
          {chatId && <Details />}
        </>
      ) : (
        <Login />
      )}

      <Notification />
    </div>
  );
};

export default App;

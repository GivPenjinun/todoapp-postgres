import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const userEmail = cookies.Email;
  const [task, setTask] = useState();

  const authToken = cookies.AuthToken;

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      console.log(json);
      setTask(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  console.log(task);

  // sorting task by date
  const sortedTask = task?.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listname={"My To Do List"} getData={getData} />
          <p className="user-email">Welcome back {userEmail}</p>
          {sortedTask?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}{" "}
        </>
      )}
    </div>
  );
}

export default App;

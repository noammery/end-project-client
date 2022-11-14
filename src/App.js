import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { AdminRegister } from "./components/AdminRegister";
import Department from "./components/Department";
import DepartmentPostEdit from "./components/DepartmentPostEdit";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { useSelector } from "react-redux";
import { Terms } from "./components/Terms";
import { io } from "socket.io-client";
import { Messanger } from "./components/Messanger";

function App() {
  const socket = io.connect(`http://localhost:5000`, {
    transports: ["websocket"],
  });
  const [messageList, setMessageList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const role = useSelector((state) => state.user.role);
  // USER / ADMIN / SUPERADMIN

  useEffect(() => {
    socket.emit("join_room");
  }, []);
  useEffect(() => {
    socket.on("back", (message) => {
      setMessageList((list) => [...list, message]);
    });
  });

  return (
    <div
      className="overflow-hidden"
      dir="rtl"
      onClick={() => {
        isOpen && setIsOpen(false);
        hamburgerOpen && setHamburgerOpen(false);
      }}
    >
      <Navbar
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />

      <Messanger
        socket={socket}
        messageList={messageList}
        setMessageList={setMessageList}
      />

      {!role && (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      )}
      {role === "USER" && (
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="department" element={<Department />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      )}
      {role === "ADMIN" && (
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="department" element={<Department />} />
          <Route path="department-edit" element={<DepartmentPostEdit />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      )}
      {role === "SUPERADMIN" && (
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="department" element={<Department />} />
          <Route path="department-edit" element={<DepartmentPostEdit />} />
          <Route path="register" element={<AdminRegister />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

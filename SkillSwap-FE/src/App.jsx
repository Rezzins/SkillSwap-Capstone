import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SkillSwap from "./SS-Feature/SkillSwap";
import UserProfile from "./SS-Feature/UserProfile";
import Home from "./layout/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skillswap" element={<SkillSwap />} />
        <Route path="/profile/:username" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

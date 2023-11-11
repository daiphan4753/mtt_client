import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./screens/Home";
import Setting from "./screens/Setting";
import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [bottomNav, setBottomNav] = useState("home");
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route index path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      <Paper
        sx={{ position: "absolute", bottom: 0, width: "100%", fontWeight: 700 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels={true}
          value={bottomNav}
          onChange={(e, bottomNav) => setBottomNav(bottomNav)}
        >
          <BottomNavigationAction
            value="home"
            onClick={() => navigate("/home")}
            icon={<FontAwesomeIcon icon={faHouse} size="2x" />}
          />
          <BottomNavigationAction
            value="setting"
            onClick={() => navigate("/setting")}
            icon={<FontAwesomeIcon icon={faGear} size="2x" />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;

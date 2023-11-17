import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TestComponent } from "./components/test";
import { SideBar } from "./components/sidebar/sidebar";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <SideBar />
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/dashboard"
            element={<TestComponent text="Hello from /dashboard!" />}
          />
          <Route
            path="/timeline"
            element={<TestComponent text="Hello from /timeline!" />}
          />
          <Route
            path="/tasks"
            element={<TestComponent text="Hello from /tasks!" />}
          />
          <Route
            path="/files"
            element={<TestComponent text="Hello from /files!" />}
          />
          <Route
            path="/settings"
            element={<TestComponent text="Hello from /settings!" />}
          />
          <Route
            path="/chat"
            element={<TestComponent text="Hello from /chat!" />}
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

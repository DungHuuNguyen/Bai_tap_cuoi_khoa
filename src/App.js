import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import './components/styles/global.css';
import './components/styles/index.css'
import { APP_ROUTER } from "./constants/routes";
import AddPage from "./pages/AddPage";
import AllTaskPage from "./pages/AllTaskPage";
import NewTaskPage from "./pages/NewTaskPage";
import DoingTaskPage from "./pages/DoingTaskPage";
import DoneTaskPage from "./pages/DoneTaskPage";
import DetailTask from "./components/DetailTask";



function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path={APP_ROUTER.ALL_TASK_PAGE} element={<AllTaskPage />}></Route>
          <Route path={APP_ROUTER.ADD_PAGE} element={<AddPage />}></Route>
          <Route path={APP_ROUTER.NEW_TASK_PAGE} element={<NewTaskPage />}></Route>
          <Route path={APP_ROUTER.DOING_TASK_PAGE} element={<DoingTaskPage />}></Route>
          <Route path={APP_ROUTER.DONE_TASK_PAGE} element={<DoneTaskPage />}></Route>
          <Route path={APP_ROUTER.DETAIL_TASK_PAGE} element={<DetailTask />}></Route>
          <Route
            path="/"
            element={<Navigate to={APP_ROUTER.ALL_TASK_PAGE} />}
            replace
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

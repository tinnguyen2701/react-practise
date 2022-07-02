import { Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css';

import './App.css';
import Layout from "./components/Layout";
import { LoginPage } from "./pages/Login.page";
import RequireUser from "./components/RequireUser";
import DashboardPage from "./pages/Dashboard.page";
import CalendarPage from "./pages/Calendar.page";
import AnalyticsPage from "./pages/Analytics.page";
import AdsPage from "./pages/Ads.page";
import CampaignsPage from "./pages/Campaigns.page";
import SettingsPage from "./pages/Settings.page";
import { HomePage } from "./pages/Home.page";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route element={<RequireUser />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/ads' element={<AdsPage />} />
          <Route path='/campaigns' element={<CampaignsPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
      </Route>

      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;

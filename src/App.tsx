import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { PublicShell } from "@/components/PublicShell";
import { SettingsPage } from "@/features/settings/SettingsPage";
import { SupplierSubmissionPage } from "@/features/supplier/SupplierSubmissionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/settings" replace />} />
      <Route
        path="/settings"
        element={
          <AppShell>
            <SettingsPage />
          </AppShell>
        }
      />
      <Route
        path="/supplier/submit/:tokenHash"
        element={
          <PublicShell>
            <SupplierSubmissionPage />
          </PublicShell>
        }
      />
    </Routes>
  );
}

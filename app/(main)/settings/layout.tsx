import Navigation from "./Navigation";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="appScreen p-4 md1:p-3 xl1:p-2 max-w-[1600px] m-auto flex">
      <Navigation />
      {children}
    </main>
  );
}

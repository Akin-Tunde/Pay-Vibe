import "./globals.css";

export const metadata = {
  title: "StackPay",
  description: "Decentralized payroll on Stacks",
};

import { ToastProvider } from "../components/Toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // die ganze App (Component) ist im AuthProvider eingeschlossen, also im Login --> HOC
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

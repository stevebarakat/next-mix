import "@/styles/main.css";
import "@/styles/utils.css";
import "@/styles/reset.css";
import "@/styles/clock.css";
import "@/styles/button.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

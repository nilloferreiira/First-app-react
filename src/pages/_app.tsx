import { CarrinhoProvider } from "@/data/context/CarrinhoContext";
import { CounterProvider } from "@/data/context/CounterContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarrinhoProvider>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </CarrinhoProvider>
  );
}

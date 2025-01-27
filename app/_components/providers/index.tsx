import { FC, ReactNode } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "./theme";
import { getCurrentTimezone } from "@/util/date";
import { QueryClientProvider } from "./query-client";
import { StoreProvider } from "./store";

type Props = {
  locale: string;
  children: ReactNode;
};

export const Providers: FC<Props> = ({ locale, children }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={getCurrentTimezone()}
    >
      <ThemeProvider>
        <QueryClientProvider>
          <StoreProvider>{children}</StoreProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

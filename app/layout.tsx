import "@/styles/globals.css";
import "@/styles/reset.css";

import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={`font-Pretendard scroll-smooth `}>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased ">
        <div>
          <SectionContainer>
            <Header />
            <main>{children}</main>
          </SectionContainer>
        </div>
      </body>
    </html>
  );
}

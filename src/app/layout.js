import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadSection from "../../components/Utils/HeadSection";
import FooterSection from "../../components/Utils/FooterSection";
import "../css/quick-website.css";

export const metadata = {
  title: "Cloud communication CPaaS platform | Omnichannel APIs",
  description:
    "Connect CPaaS communication services as SMS, Voice Email, RCS & WhatsApp in no time and achieve high delivery rates. Try Free APIs now!",
  alternates: {
    canonical: "https://authkey.io",
  },
  verification: {
    google: "uSMZHft5F59dnUNX-BIOV1RKGpmaIg7yxpiBmKRBSas",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadSection />
      <body>
        <Header />
        {children}
        <Footer />
        <FooterSection />
      </body>
    </html>
  );
}

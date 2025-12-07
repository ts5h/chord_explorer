import { CookieConsent } from "react-cookie-consent";
import "@/scss/cookie_consent/cookie_consent.scss";

export const CustomCookieConsent = () => {
  return (
    <CookieConsent
      location={"bottom"}
      buttonText={"I agree"}
      cookieName={"chord-explorer-cookie"}
      style={{
        backgroundColor: "rgba(255,255,255,0.8)",
        borderTop: "1px solid #E2E8F0",
      }}
      buttonClasses={"cookie_consent__button"}
      buttonStyle={{
        backgroundColor: "transparent",
        borderLeft: "1px solid #E2E8F0",
        color: "#718096",
        fontSize: "14px",
        margin: 0,
        padding: "8px 16px",
      }}
      contentClasses={"cookie_consent__content"}
      contentStyle={{
        backgroundColor: "transparent",
        color: "#718096",
        fontSize: "14px",
        margin: 0,
        padding: "8px 16px",
      }}
      expires={180}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

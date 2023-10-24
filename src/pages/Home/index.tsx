import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { PageTemplate } from "~/components/PageTemplate";
import { Contents } from "~/components/Contents";

export const Home = () => {
  useEffect(() => {
    if (isMobile) document.body.classList.add("mobile");
    return () => document.body.classList.remove("mobile");
  }, []);

  return (
    <PageTemplate>
      <Contents />
    </PageTemplate>
  );
};

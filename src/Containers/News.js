import { Box } from "@material-ui/core";
import React from "react";

import News from "./../Components/News";

export default function NewsContainer() {
  return (
    <Box overflow="hidden">
      <div style={{ margin: "auto ", width: "100%", textAlign: "center" }}>
        <a
          href="https://chrome.google.com/webstore/detail/vis%C3%A3o-libert%C3%A1ria/jnafjgekhpiipmhihkmoboggpclkdijl?hl=pt-BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ width: "100%", margin: "0px auto 20px", maxWidth: 720 }}
            src="/img/banner-visaolibertaria-grande.png"
            alt="Extensão Visão Libertária"
          />
        </a>
      </div>
      <News />
    </Box>
  );
}

import * as http from "http";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { verifyPage, extractPageTitle } from "./verifier";

const apiURL = 'http://localhost:9352/rest.php/data_accounting/v1/standard';

const Popup = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [currentURL, setCurrentURL] = useState<string>();
  const [verificationLog, setVerificationLog] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
      const urlObj = new URL(tabs[0].url || '');
      const extractedPageTitle = extractPageTitle(urlObj);
      if (!extractedPageTitle) {
        return;
      }
      setPageTitle(extractedPageTitle);
      //setBadge(urlObj);
    });
  }, []);

  return (
    <>
      <ul style={{ minWidth: "700px" }}>
        <li>Current Page Title: {pageTitle}</li>
      </ul>
      <button
        onClick={() => verifyPage(pageTitle, setVerificationLog)}
        style={{ marginRight: "5px" }}
      >
        Verify Page
      </button>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: verificationLog}}>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useEffect } from "react"
import PropTypes from "prop-types";
import useCreateSession from "../../hooks/useCreateSession"
import useBrowserFingerprint from "../../hooks/useBrowserFingerprint";

const Session = props => {
  const createSessionResponse = useCreateSession(props.session_id);
  const browserFingerprintResponse = useBrowserFingerprint();

  useEffect(() => {
    if (createSessionResponse.complete && browserFingerprintResponse.complete) {
      console.log("Session ID: " + createSessionResponse.data.session_id);
      console.log("Browser ID: " + browserFingerprintResponse.data.browser_id);
    }
  }, [createSessionResponse, browserFingerprintResponse]);

  return (
    <div>
      <h1><strong>Session ID:</strong>Nope</h1>
      <h1><strong>Browser ID:</strong>{props.browser_id}</h1>
    </div>
  );
};

Session.propTypes = {
  browser_id: PropTypes.string,
  session_id: PropTypes.string,
};

export default Session;

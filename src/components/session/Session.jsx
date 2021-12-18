import React from "react"
import PropTypes from "prop-types";
import useCreateSession from "../../hooks/useCreateSession"
import useBrowserFingerprint from "../../hooks/useBrowserFingerprint";

const Session = props => {
  const createSessionResponse = useCreateSession(props.session_id);
  const browserFingerprintResponse = useBrowserFingerprint();

  let response = (
    <div>
      <h1><strong>Session ID:</strong>Nope</h1>
      <h1><strong>Browser ID:</strong>{props.browser_id}</h1>
    </div>
  );

  useEffect(() => {
    if(createSessionResponse.complete && browserFingerprintResponse.complete) {
      response = (
        <div>
          <h1><strong>Session ID:</strong>{createSessionResponse.data.session_id}</h1>
          <h1><strong>Browser ID:</strong>{browserFingerprintResponse.data.browser_id}</h1>
        </div>
      );
    }
  });

  return response;
};

  return response;
};

Session.propTypes = {
  browser_id: PropTypes.string,
  session_id: PropTypes.string,
};

export default Session;

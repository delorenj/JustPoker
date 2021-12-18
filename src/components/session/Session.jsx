import React from "react"
import PropTypes from "prop-types";
import useCreateSession from "../../hooks/useCreateSession"

const Session = props => {
  const createSessionResponse = useCreateSession(props.session_id);
  if(createSessionResponse.complete) {
    return (
      <div>
        <h1><strong>Session ID:</strong>{createSessionResponse.data.session_id}</h1>
        <h1><strong>Browser ID:</strong>{props.browser_id}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1><strong>Session ID:</strong>Nope</h1>
        <h1><strong>Browser ID:</strong>{props.browser_id}</h1>
      </div>
    )
  }
};

Session.propTypes = {
  browser_id: PropTypes.string,
  session_id: PropTypes.string,
};

export default Session;

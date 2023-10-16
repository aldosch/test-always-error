import React from "react";

function Error({ statusCode }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Custom error page</h1>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

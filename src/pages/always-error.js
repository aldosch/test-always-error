import React from "react";

export async function getServerSideProps() {
  throw new Error("This is a test server-side error.");
}

const AlwaysErrorPage = () => {
  return (
    <div>
      <h1>You should not see this content.</h1>
      <p>
        If you're seeing this, the error wasn't thrown or wasn't handled
        properly.
      </p>
    </div>
  );
};

export default AlwaysErrorPage;

"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-page" >
      <h2>Something went wrong!</h2>
      <button className="error-btn" onClick={() => reset()}>Try again</button>
    </div>
  );
}

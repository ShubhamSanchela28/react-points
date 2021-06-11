import React, { useState } from "react";

export const UseInfiniteScroll = (start = 30, pace = 10) => {
  const [limit, setlimit] = useState(start);
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setlimit(limit + pace);
    }
    return limit;
  };
};

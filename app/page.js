"use client";

import React, { useState } from "react";

function page() {
  const [name, setName] = useState("");

  const postHandler = async () => {
    const res = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    // const data = await res?.json();
    // console.log("ddd", data);
  };

  console.log(name);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={postHandler}>okk</button>
    </div>
  );
}

export default page;

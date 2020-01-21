import React, { createContext, useState } from "react";

const ColorContext = createContext({ color: "black" }); // 저장창고(Context)에 검정색 저장

export default ColorContext;

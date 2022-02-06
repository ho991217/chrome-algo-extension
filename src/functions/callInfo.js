import axios from "axios";
import React, { useEffect, useState } from "react";

export async function CallInfo(userId) {
  try {
    const response = await axios.get(
      `https://solved.ac/api/v3/user/show?handle=${userId}`
    );
    return response;
  } catch (error) {
    alert("알 수 없는 사용자 입니다.");
    localStorage.clear();
  }
}

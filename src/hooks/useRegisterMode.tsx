"use client";

import { useState } from "react";

export function useIsRegistering() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toogleForm = () => {
    setIsRegistering(prevState => !prevState);
  };

  return [isRegistering, toogleForm] as const;
}
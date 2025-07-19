'use client';

import { ClimbingBoxLoader } from "react-spinners";  

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClimbingBoxLoader color="#0171E0" size={30} />
    </div>
  );
}

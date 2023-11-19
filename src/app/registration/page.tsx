// pages/register.tsx
import React from "react";
import Head from "next/head";
import RegistrationForm from "../components/RegistrationForm";

const Page = () => {
  return (
    <div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="h-full space-y-0.5 w-1/2">
          <h2 className="text-2xl font-bold tracking-tight mb-5">Registration Form</h2>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

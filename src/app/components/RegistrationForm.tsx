"use client";

import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const showToastMessage = () => {
    toast.success("User successfully registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastMessageError = () => {
    toast.error("Something went wrong!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onSubmit = async (data: TSignUpSchema) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone,
        company: {
          name: data.company,
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(function (res) {
      return res.text();
    });

    const obj = JSON.parse(response);

   

    if (!obj.id) {
      showToastMessageError();
      return;
    } else {
      showToastMessage();
    }

    if (obj.errors) {
      const errors = response.errors;

      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.name) {
        setError("name", {
          type: "server",
          message: errors.name,
        });
      } else if (errors.username) {
        setError("username", {
          type: "server",
          message: errors.username,
        });
      } else if (errors.phone) {
        setError("phone", {
          type: "server",
          message: errors.phone,
        });
      } else if (errors.company) {
        setError("company", {
          type: "server",
          message: errors.company,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong!");
      }
    }

    reset();
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <label data-testid="fullname" className="-mb-3">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Jhon Doe"
          className="shadow  mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mt-3 mb-2-outline"
        />
        {errors.name && (
          <p className="text-red-500">{`${errors.name.message}`}</p>
        )}

        <label data-testid="phone" className="-mb-2">
          Phone
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="text"
          placeholder="0409709997"
          className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mb-2-outline"
        />
        {errors.phone && (
          <p className="text-red-500">{`${errors.phone.message}`}</p>
        )}

        <label data-testid="company" className="-mb-2">
          Company
        </label>
        <input
          {...register("company")}
          id="company"
          type="text"
          placeholder="Salesforce Pty Ltd."
          className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mb-2-outline"
        />
        {errors.company && (
          <p className="text-red-500">{`${errors.company.message}`}</p>
        )}

        <label data-testid="username" className="-mb-2">
          Username
        </label>
        <input
          {...register("username")}
          id="username"
          type="text"
          placeholder="something123"
          className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mb-2-outline"
        />
        {errors.username && (
          <p className="text-red-500">{`${errors.username.message}`}</p>
        )}

        <label data-testid="email" className="-mb-2">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="something@gmail.com"
          className="shadow mt-3 mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mt-3 mb-2-outline"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <label data-testid="password" className="-mb-2">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Password"
          className="shadow mt-3 mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mt-3 mb-2-outline"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <label data-testid="confirmpassword" className="-mb-2">
          Confirm Password
        </label>
        <input
          {...register("confirmPassword")}
          id="confirmpassword"
          type="password"
          placeholder="Confirm password"
          className="shadow mt-3 mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow mt-3 mb-2-outline"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
}
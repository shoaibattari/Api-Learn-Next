"use client";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
  });
  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    // alert("submit clicked");
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="sm:col-span-2 px-5">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className=" text-2xl md:text-6xl font-bold  text-orange-500">
          Register Client
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Client Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="clientName"
              id="name"
              autoComplete="name"
              placeholder="Enter Client Name"
              value={form.clientName}
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Client Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="clientEmail"
              id="email"
              autoComplete="email"
              placeholder="Enter Client Email"
              value={form.clientEmail}
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-3 p-5">
          <button
            type="submit"
            className="mt-3 bg-green-700 font-medium rounded-md text-sm text-white p-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

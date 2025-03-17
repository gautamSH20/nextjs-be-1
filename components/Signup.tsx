"use client";
import { ChangeEventHandler, useState } from "react";

export function Signup() {
  const [username, setUsernaame] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div>
          <div className="text-3xl font-extrabold px-10">Signup</div>
          <div className="pt-2">
            <LableInput
              label="username"
              placeholder="Enter your usename"
              onChange={(e) => {
                setUsernaame(e.target.value);
              }}
            />
            <LableInput
              label="password"
              type="password"
              placeholder="enter some password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LableInput({ type, label, placeholder, onChange }: LableInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold pt-4">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id="first_name"
      ></input>
    </div>
  );
}

interface LableInputType {
  type?: string;
  label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

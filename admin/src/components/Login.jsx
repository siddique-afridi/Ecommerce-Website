import React, { useState } from "react";
import axios from 'axios';
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async(e) => {
    console.log("i am submitted")
    try {
      e.preventDefault();

      const res = await axios.post(
        backendUrl + '/api/user/admin',
        {email,password}
      )
      if(res.data.success){
        setToken(res.data.token)
      }else{
        toast.error(res.data.message)
      }
      toast.success("Login Successful")

    } catch (error) {
        console.log(error);
         toast.error(res.data.message)
    }
  };

return (
  <div className="flex min-h-screen items-center justify-center bg-background px-6">
    <div className="w-full max-w-md">

      {/* Logo / Brand */}
      <div className="mb-8 text-center">
        <h1 className="font-display text-5xl text-foreground">
          Admin
        </h1>

        <p className="mt-3 text-muted">
          Sign in to manage your store and orders.
        </p>
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-border bg-surface p-8 shadow-card">

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-muted">
            Enter your credentials to continue.
          </p>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="space-y-6"
        >

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-accent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-accent"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-primary py-3 font-medium text-primary-foreground transition hover:bg-primary-hover"
          >
            Sign In
          </button>

        </form>
      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-muted">
        Secure Admin Dashboard
      </p>

    </div>
  </div>
);
};

export default Login;

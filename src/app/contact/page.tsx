"use client";

import React, { useRef, useState, useEffect } from "react";
import style from "./contact.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function contact() {
  const [isMobile, setIsMobile] = useState(0);
  const toastIdRef = useRef(null);
  const [categoryInput, setCategoryInput] = useState("Title")

  const ContactValidator = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    name: z
      .string()
      .min(3, { message: "Your name must be at least 3 letters" }),
    title: z
      .string()
      .min(3, { message: "Your title must be at least 3 letters" }),
    // Not required
    category: z.string().optional(),
    message: z
      .string()
      .min(10, { message: "Your message must be at least 10 characters long" })
      .max(2000, {
        message: "Your message must be less than 2000 characters long",
      }),
    // This is a honeypot to prevent spam
    testMessage: z.string().max(0),
  });

  type Inputs = z.infer<typeof ContactValidator>;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(ContactValidator),
    defaultValues: {
      category: "Feedback",
    },
  });

  const { mutate: submitHandler } = useMutation({
    mutationFn: async (data: Inputs) => {
      try {
        const response = await axios.post("/api/email", data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      setIsMobile(isMobile + 1);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const toastId = React.useRef(null);

  useEffect(() => {
    if (isMobile != 0)
      toast.update(toastIdRef.current, {
        render: "Email sent successfully!",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
        isLoading: false,
      });
  }, [isMobile]);

  const onSubmit = (data: Inputs) => {
    const toastId = toast.loading("Please wait...");
    toast.update(toastId, {
      render: "Sending...",
      isLoading: true,
    });

    toastIdRef.current = toastId;

    submitHandler(data);
    reset();
  };

    return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={style.content}>
        <div style={{ backgroundColor: "#19191F", padding: "19px", borderRadius: "5px", border: "1px solid white"}}>
        <form onSubmit={handleSubmit(onSubmit)} onChange={() => {setCategoryInput(getValues("category"))}}>
          <div className={style.pairGroup}>
          <div className={style.inputGroup}>
            <span><span style={{color: "red"}}>*</span>Email</span>
            {errors.email && (
                <p className={style.error}>{errors.email.message}</p>
            )}
            <input type="text" name="email" {...register("email")} />
          </div>
          <div className={style.inputGroup}>
            <span><span style={{color: "red"}}>*</span>Name</span>
            {errors.name && (
                <p className={style.error}>{errors.name.message}</p>
            )}
            <input type="text"    name="name"
                   {...register("name")}/>
          </div>
          </div>
          <div className={style.pairGroup}>
          <div className={style.inputGroup}>
            <span><span style={{color: "red"}}>*</span>{getValues("category") == "Idea" ? "Short discription" : "Title"}</span>
            {errors.title && (
                <p className={style.error}> {errors.title.message}</p>
            )}
            <input type="text"     name="title"
                   {...register("title")} />
          </div>
          <div className={style.inputGroup}>
            <span><span style={{color: "red"}}>*</span>Category</span>
            <select style={{color: "black", width: "100%", marginRight: "85px"}} id="options" name="category"  {...register("category")}>
              <option value="Feedback">Feedback</option>
              <option value="Report">Report</option>
              <option value="Idea">Idea</option>
            </select>
          </div>
          </div>
          <div className={style.pairGroup}>
          <div className={style.inputGroup}>
            <span><span style={{color: "red"}}>*</span>{getValues("category") == "Idea" ? "Idea" : "Message"}</span>
            {errors.message && (
                <p className={style.error}>{errors.message.message}</p>
            )}
            <textarea style={{width: "100%", marginRight: "280px"}}    {...register("message")}></textarea>
          </div>
            <input
                style={{ display: "none" }}
                {...register("testMessage")}
            ></input>
          </div>
          <div className={style.button}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

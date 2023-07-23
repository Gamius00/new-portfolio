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

  useEffect(() => {
    if (isMobile != 0) toast.success("Email sent successfully!");
  }, [isMobile]);

  const onSubmit = (data: Inputs) => {
    submitHandler(data);
    reset();
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose={10000} />;
      <div className={style.contentflexbox}>
        <div className={style.contentbox}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.Titles}>
              <label>*Email</label>
              <label>*Name</label>
            </div>
            <div className={style.Inputs}>
              <div style={{ display: "block" }}>
                {errors.email && (
                  <p className={style.error}>{errors.email.message}</p>
                )}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <input
                    className={style.Email}
                    name="email"
                    {...register("email")}
                  />
                </div>
              </div>
              <div>
                <div style={{ display: "block" }}>
                  {errors.name && (
                    <p className={style.error}>{errors.name.message}</p>
                  )}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <input
                      className={style.Name}
                      name="name"
                      {...register("name")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.Titles}>
              <label>*Title</label>
              <label>Category</label>
            </div>
            <div className={style.Inputs}>
              <div style={{ display: "block" }}>
                {errors.title && (
                  <p className={style.error}> {errors.title.message}</p>
                )}

                <input
                  className={style.Title}
                  name="title"
                  {...register("title")}
                />
              </div>

              <label>
                <select
                  style={{
                    width: "180px",
                    borderRadius: "5px",
                    height: "25px",
                    marginTop: "15px",
                    color: "black",
                  }}
                  id="options"
                  name="category"
                >
                  <option value="option1">Feedback</option>
                  <option value="option2">Report</option>
                </select>
              </label>
              {errors.category && <p>{errors.category.message}</p>}
            </div>
            <div className={style.Message_Title}>
              <label>*Message</label>
            </div>
            {errors.message && (
              <p className={style.error}>{errors.message.message}</p>
            )}
            <div className={style.textarea}>
              <textarea
                name="message"
                style={{
                  width: "85%",
                  borderRadius: "5px",
                  height: "100px",
                  color: "black",
                  resize: "none",
                }}
                {...register("message")}
              />
            </div>
            {/* This is a honeypot to prevent spam */}
            <input
              style={{ display: "none" }}
              {...register("testMessage")}
            ></input>
            <div className={style.div_button}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

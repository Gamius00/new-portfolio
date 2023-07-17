"use client";

import React, { useRef } from "react";
import Navbar from "../Navbar";
import style from "./contact.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function page() {
  /*const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const title = form.elements.title.value;
    const name = form.elements.name.value;
    const category = form.elements.category.value;
    const message = form.elements.message.value;
    const data = { email, name, title, category, message };
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }; */

  const ContactValidator = z.object({
    email: z.string().email({ message: "Not a valid email" }),
    name: z.string(),
    title: z.string(),
    category: z.string(),
    message: z
      .string()
      .min(10, { message: "Your message must be at least 10 characters long" })
      .max(2000, {
        message: "Your message must be less than 2000 characters long",
      }),
  });

  type Inputs = z.infer<typeof ContactValidator>;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactValidator),
  });

  return (
    <div>
      <div className={style.contentflexbox}>
        <div className={style.contentbox}>
          <form onSubmit={handleSubmit((data) => submitHandler(data))}>
            <div className={style.Titles}>
              <label>Email</label>
              <label>Name</label>
            </div>
            <div className={style.Inputs}>
              <input className={style.Email} name="email" />
              <input className={style.Name} name="name" />
            </div>
            <div className={style.Titles}>
              <label>Title</label>
              <label>Category</label>
            </div>
            <div className={style.Inputs}>
              <input className={style.Title} name="title" />
              <input className={style.Name} name="category" />
            </div>
            <div className={style.Message_Title}>
              <label>Message</label>
            </div>
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
              />
            </div>
            <div className={style.div_button}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

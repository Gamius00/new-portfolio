"use client";

import React, { useRef } from "react";
import style from "./contact.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function contact() {
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
      // alert("Email sent!");
      // !!
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (data: Inputs) => {
    submitHandler(data);
    reset();
  };

  return (
    <div>
      <div className={style.contentflexbox}>
        <div className={style.contentbox}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.Titles}>
              <label>*Email</label>
              <label>*Name</label>
            </div>
            <div className={style.Inputs}>
              <input
                className={style.Email}
                name="email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <input className={style.Name} name="name" {...register("name")} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className={style.Titles}>
              <label>*Title</label>
              <label>Category</label>
            </div>
            <div className={style.Inputs}>
              <input
                className={style.Title}
                name="title"
                {...register("title")}
              />
              {errors.title && <p>{errors.title.message}</p>}
              <input
                className={style.Name}
                name="category"
                {...register("category")}
              />
              {errors.category && <p>{errors.category.message}</p>}
            </div>
            <div className={style.Message_Title}>
              <label>*Message</label>
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
                {...register("message")}
              />
              {errors.message && <p>{errors.message.message}</p>}
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

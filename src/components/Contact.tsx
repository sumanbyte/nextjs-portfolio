"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    const message = messageRef.current?.value;

    if (!email || !name || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sendmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            message,
          }),
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success(data.message || "Message sent successfully");
        clearForm();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" py-10" id="contact">
      <p className="text-3xl pb-10">Contact</p>
      <div className="flex gap-2">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-4 items-center ">
            <div className="bg-black rounded-full text-white p-2">
              <MdEmail className="text-xl" />
            </div>
            <p>sumanparajuli@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-black rounded-full text-white p-2">
              <FaPhoneAlt className="text-lg" />
            </div>
            <p>+977 9825304125</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-black rounded-full text-white p-2">
              <FaAddressCard className="text-lg" />
            </div>
            <p>Barahkshetra Municipality-7, Sunsari, Nepal</p>
          </div>
        </div>
        <div className="w-1/2">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border border-gray-400/75 focus:ring-1 outline-none focus:ring-gray-400/75 transition-all duration-300 rounded-lg px-4 py-2"
                  name="name"
                  ref={nameRef}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-400/75 focus:ring-1 outline-none focus:ring-gray-400/75 transition-all duration-300 rounded-lg px-4 py-2"
                  name="email"
                  ref={emailRef}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={3}
                  placeholder="Enter your message"
                  className="border border-gray-400/75 focus:ring-1 outline-none focus:ring-gray-400/75 transition-all duration-300 rounded-lg px-4 py-2 resize-none"
                  name="message"
                  ref={messageRef}
                ></textarea>
              </div>
              <button
                disabled={isLoading}
                className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg cursor-pointer disabled:bg-gray-800/50 flex items-center justify-center gap-2"
              >
                Send Message
                {isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin text-base" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}

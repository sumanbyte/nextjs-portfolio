import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="">
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
            <p>+977 1234567890</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-black rounded-full text-white p-2">
              <FaAddressCard className="text-lg" />
            </div>
            <p>123 Main Street, New York, NY 10010</p>
          </div>
        </div>
        <div className="w-1/2">
          <form action="">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border border-gray-400/75 focus:ring-1 outline-none focus:ring-gray-400/75 transition-all duration-300 rounded-lg px-4 py-2"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-400/75 focus:ring-1 outline-none focus:ring-gray-400/75 transition-all duration-300 rounded-lg px-4 py-2"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={3}
                  placeholder="Enter your message"
                  className="border border-gray-400/75 focus:ring-1 outline-none focus:ring-gray-400/75 transition-all duration-300 rounded-lg px-4 py-2 resize-none"
                  name="message"
                ></textarea>
              </div>
              <button className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg cursor-pointer ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

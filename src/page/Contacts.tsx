import React from "react";

import { Toaster, toast } from "sonner";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "14d1b0d6-63aa-4db2-9e2a-eb71f7ef19ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message has been sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Failed to submit Message");
      setResult(data.message);
    }
  };

  return (
    <div className="p-3 font-public flex flex-col sm:w-[300px] md:w-[700px]">
      <form onSubmit={onSubmit}>
        <div className="pt-5 space-y-5">
          <div className="border-2 p-4  transform transition-all duration-500  shadow-bold dark:bg-slate-900 dark:text-white dark:border-white dark:shadow-bolder bg-white border-black rounded-md">
            <p>Full Name</p>
            <input
              className="rounded-lg w-full dark:bg-slate-600 bg-white border-2  border-red-500 dark:border-[#0e76a8] px-5 py-3"
              placeholder="Hi! What's ur name :)"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="border-2 p-4  transform transition-all duration-500 dark:bg-slate-900 dark:text-white dark:border-white dark:shadow-bolder  shadow-bold bg-white border-black rounded-md">
            <p>Email</p>
            <input
              className="rounded-lg w-full dark:bg-slate-600 bg-white border-2 border-red-500 dark:border-[#0e76a8] px-5 py-3"
              placeholder="Email Address"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="border-2 p-4  transform transition-all duration-500 dark:bg-slate-900 dark:text-white dark:border-white dark:shadow-bolder shadow-bold bg-white border-black rounded-md">
            <p>Message</p>
            <textarea
              className="rounded-lg w-full h-[150px] resize-none dark:bg-slate-600 bg-white border-2 border-red-500 dark:border-[#0e76a8] px-5 py-3"
              placeholder="Hope we can get along! :D"
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className=" border-2 w-full px-3 py-2  transform transition-all duration-500 text-white dark:text-black dark:border-white dark:shadow-bolder font-bold shadow-bold border-black bg-[#d12c2c] dark:bg-neublue rounded-md text-center"
          >
            Send Message
          </button>
          <Toaster richColors />
        </div>
      </form>
    </div>
  );
}

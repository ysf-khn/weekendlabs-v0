"use client";
import { useModal } from "@/app/Utilities/ModalContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
};

const InquiryForm = () => {
  const { isModalOpen, toggleModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Inquiry submitted successfully!");
        setIsSubmitted(true); // Set submission status to true
        toggleModal(); // Close the modal
      } else {
        console.error("Failed to submit inquiry.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
  };

  const modalVariants = {
    hidden: { y: "100%", opacity: 0 }, // Start off-screen at the bottom
    visible: { y: "10%", opacity: 1 }, // Slide into view (90vh height leaves 10% gap at the top)
    exit: { y: "100%", opacity: 0 }, // Slide back off-screen
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[10000] flex justify-center items-end"
        >
          <motion.div
            className="bg-brandGreen text-black w-full h-[97vh] rounded-t-[3rem] p-6 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute left-1/2 transform -translate-x-1/2 -top-9 bg-brandGreen rounded-full p-6 text-3xl"
            >
              <XMarkIcon height={25} width={25} />
            </button>

            <div className="flex items-center justify-between px-24 py-4 gap-[5rem]">
              <div className="text-[3vw] flex-1">
                every project begins with a hello. let&apos;s hear yours!
              </div>

              <div className="flex-1 mt-3">
                {" "}
                {/* WhatsApp Contact */}
                <a
                  href="https://wa.me/+919997035168" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 bg-black w-3/4 py-4 px-6 rounded-md block text-center"
                >
                  Contact Us on WhatsApp
                </a>
                <p className="text-center w-3/4 my-3">or</p>
                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="text-white overflow-y-auto w-3/4"
                >
                  {/* Full Name */}
                  <div className="mb-4">
                    <input
                      type="text"
                      id="fullName"
                      placeholder="your name"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className={` placeholder:text-white w-full px-6 py-4 outline-none rounded-md bg-black border ${
                        errors.fullName ? "border-red-500" : "border-none"
                      } `}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      placeholder="your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className={` placeholder:text-white w-full px-6 py-4 outline-none rounded-md bg-black ${
                        errors.email ? " border border-red-500" : ""
                      } rounded-lg p-2`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="your phone (optional)"
                      {...register("phone")}
                      className=" placeholder:text-white w-full px-6 py-4 outline-none rounded-md bg-black"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="mb-4">
                    <select
                      id="service"
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      className={` placeholder:text-white w-full px-6 py-4 outline-none rounded-md bg-black cursor-pointer ${
                        errors.service
                          ? "border border-red-500"
                          : "border-gray-300"
                      } `}
                    >
                      <option value="" disabled selected>
                        service required
                      </option>
                      <option value="website">Website</option>
                      <option value="ecommerce-store">Ecommerce Store</option>
                      <option value="custom-software">
                        Custom Software / App
                      </option>
                      <option value="logo-branding">Logo / Branding</option>
                      <option value="design">UI/UX / Graphic Design</option>
                      <option value="marketing">Social Media Marketing</option>
                      <option value="seo">SEO</option>
                      <option value="automation">Automation</option>
                      <option value="product-catalog">Product Catalog</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="mb-4">
                    <select
                      id="budget"
                      {...register("budget")}
                      className=" placeholder:text-white w-full px-6 py-4 outline-none rounded-md bg-black cursor-pointer"
                    >
                      <option value="" disabled selected>
                        budget (optional)
                      </option>
                      <option value="<25000">&lt; ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value=">100000">₹1,00,000+</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-between bg-brandGreen border-2 border-black text-black py-4 px-4 rounded-md"
                  >
                    <span className="">
                      {isSubmitted ? "Submitted" : "Submit"}
                    </span>
                    {!isSubmitted && (
                      <ChevronRightIcon height={20} width={20} />
                    )}
                  </button>

                  <p className="text-black mt-6">
                    <span className="font-bold">disclaimer:</span> we do our
                    best to reply to all queries. please give us upto 24 hours
                    to reply.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryForm;

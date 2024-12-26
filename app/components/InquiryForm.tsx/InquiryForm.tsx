"use client";

import { useModal } from "@/app/Utilities/ModalContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone?: string;
  services: string[];
};

const serviceOptions = [
  { value: "website", label: "Website" },
  { value: "ecommerce-store", label: "Ecommerce Store" },
  { value: "custom-software", label: "Custom Software / App" },
  { value: "logo-branding", label: "Logo / Branding" },
  { value: "design", label: "UI/UX / Graphic Design" },
  { value: "marketing", label: "Social Media Marketing" },
  { value: "seo", label: "SEO" },
  { value: "automation", label: "Automation" },
  { value: "product-catalog", label: "Product Catalog" },
];

const InquiryForm = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      services: [],
    },
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const selectedServices = watch("services") || [];

  useEffect(() => {
    if (!isModalOpen) {
      reset();
      setSubmissionStatus("idle");
    }
  }, [isModalOpen, reset]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceToggle = (value: string) => {
    const currentServices = selectedServices;
    const newServices = currentServices.includes(value)
      ? currentServices.filter((service) => service !== value)
      : [...currentServices, value];
    setValue("services", newServices);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmissionStatus("submitting");
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setTimeout(() => {
          toggleModal();
          setSubmissionStatus("idle");
        }, 3000);
      } else {
        console.error("Failed to submit inquiry.");
        setSubmissionStatus("idle");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmissionStatus("idle");
    }
  };

  const handleModalClose = () => {
    reset();
    setSubmissionStatus("idle");
    toggleModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[10000] flex justify-center items-end"
        >
          <motion.div
            className="bg-brandGreen text-black w-full h-screen md:h-[97vh] rounded-t-2xl md:rounded-t-[3rem] p-6 relative"
            initial={{ y: "100%" }}
            animate={{ y: "10%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={handleModalClose}
              className="absolute left-1/2 transform -translate-x-1/2 -top-9 bg-brandGreen rounded-full p-6"
            >
              <XMarkIcon height={25} width={25} />
            </button>

            <div className="flex flex-col md:flex-row items-center justify-between md:px-24 py-4 md:gap-[5rem]">
              <AnimatePresence mode="wait">
                {submissionStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-lg md:text-[3vw] md:leading-[3.5rem] flex-1 flex flex-col items-center justify-center space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <svg
                        className="w-16 h-16 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-center"
                    >
                      thank you for reaching out!
                      <br />
                      we&apos;ll get back to you soon.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-lg md:text-[3vw] md:leading-[3.5rem] flex-1"
                  >
                    every project begins with a hello. let&apos;s hear yours!
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {submissionStatus !== "success" && (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 mt-3 w-full"
                  >
                    <a
                      href="https://wa.me/+919997035168"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-black md:w-3/4 py-4 md:px-6 rounded-md block text-center"
                    >
                      Contact Us on WhatsApp
                    </a>
                    <p className="text-center md:w-3/4 my-1 md:my-3">or</p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="text-white md:w-3/4"
                    >
                      <div className="mb-2 md:mb-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          {...register("fullName", {
                            required: "Full Name is required",
                          })}
                          className={`w-full px-3 md:px-6 py-4 outline-none rounded-md bg-black border placeholder:text-gray-400 ${
                            errors.fullName ? "border-red-500" : "border-none"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-2 md:mb-4">
                        <input
                          type="email"
                          placeholder="Your Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                          className={`w-full px-3 md:px-6 py-4 outline-none rounded-md bg-black placeholder:text-gray-400 ${
                            errors.email ? "border border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-2 md:mb-4">
                        <input
                          type="tel"
                          placeholder="Your Phone (optional)"
                          {...register("phone")}
                          className="w-full px-3 md:px-6 py-4 outline-none rounded-md bg-black placeholder:text-gray-400"
                        />
                      </div>

                      <div className="mb-2 md:mb-4 relative" ref={dropdownRef}>
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="bg-black rounded-md px-3 md:px-6 py-4 cursor-pointer flex justify-between items-center"
                        >
                          <span
                            className={
                              selectedServices.length === 0
                                ? "text-gray-400"
                                : "text-white"
                            }
                          >
                            {selectedServices.length === 0
                              ? "Select Services"
                              : `${selectedServices.length} service${
                                  selectedServices.length > 1 ? "s" : ""
                                } selected`}
                          </span>
                          {isDropdownOpen ? (
                            <ChevronUpIcon className="h-5 w-5" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5" />
                          )}
                        </div>

                        {isDropdownOpen && (
                          <div className="absolute z-10 w-full mt-1 bg-black rounded-md shadow-lg max-h-48 overflow-y-auto">
                            {serviceOptions.map((option) => (
                              <label
                                key={option.value}
                                className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-800 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  value={option.value}
                                  checked={selectedServices.includes(
                                    option.value
                                  )}
                                  onChange={() =>
                                    handleServiceToggle(option.value)
                                  }
                                  className="h-4 w-4 accent-brandGreen"
                                />
                                <span className="text-white">
                                  {option.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={submissionStatus !== "idle"}
                        className="w-full flex items-center justify-between bg-brandGreen hover:bg-green-400 border-2 border-black text-black py-3 md:py-4 px-4 rounded-md disabled:opacity-75"
                      >
                        {submissionStatus === "submitting" ? (
                          <>
                            <span>Submitting...</span>
                            <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                          </>
                        ) : (
                          <>
                            <span>Submit</span>
                            <ChevronRightIcon height={20} width={20} />
                          </>
                        )}
                      </button>

                      <p className="text-black mt-6">
                        <span className="font-bold">disclaimer:</span> we do our
                        best to reply to all queries. please give us upto 24
                        hours to reply.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryForm;

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
  // budget?: string;
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
    "idle" | "submitting" | "submitted"
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
        console.log("Inquiry submitted successfully!");
        setSubmissionStatus("submitted");
        setTimeout(toggleModal, 2500);
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

  const getHeaderText = () => {
    if (submissionStatus === "submitted") {
      return "thank you for reaching out! we'll get back to you soon.";
    }
    return "every project begins with a hello. let's hear yours!";
  };

  const getButtonContent = () => {
    switch (submissionStatus) {
      case "submitting":
        return (
          <>
            <span>Submitting...</span>
            <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
          </>
        );
      case "submitted":
        return (
          <>
            <span>Submitted!</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </>
        );
      default:
        return (
          <>
            <span>Submit</span>
            <ChevronRightIcon height={20} width={20} />
          </>
        );
    }
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
            className="bg-brandGreen text-black w-full h-screen md:h-[97vh] rounded-t-2xl md:rounded-t-[3rem] p-6 relative"
            initial={{ y: "100%" }}
            animate={{ y: "10%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={handleModalClose}
              className="absolute left-1/2 transform -translate-x-1/2 -top-9 bg-brandGreen rounded-full p-6 md:text-3xl"
            >
              <XMarkIcon height={25} width={25} />
            </button>

            <div className="flex flex-col md:flex-row items-center justify-between md:px-24 py-4 md:gap-[5rem]">
              <div className="text-lg md:text-[3vw] md:leading-[3.5rem] flex-1">
                {getHeaderText()}
              </div>

              <div className="flex-1 mt-3">
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
                      id="fullName"
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
                      id="email"
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
                      id="phone"
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
                        className={`${
                          selectedServices.length === 0
                            ? "text-gray-400"
                            : "text-white"
                        }`}
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
                              checked={selectedServices.includes(option.value)}
                              onChange={() => handleServiceToggle(option.value)}
                              className="h-4 w-4"
                            />
                            <span className="text-white">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {errors.services && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select at least one service
                      </p>
                    )}
                  </div>

                  {/* <div className="mb-2 md:mb-4">
                    <select
                      id="budget"
                      {...register("budget")}
                      className="w-full px-3 md:px-6 py-4 outline-none rounded-md bg-black cursor-pointer text-gray-400"
                    >
                      <option value="" disabled selected>
                        Budget (optional)
                      </option>
                      <option value="<25000" className="text-white">
                        &lt; ₹25,000
                      </option>
                      <option value="25000-50000" className="text-white">
                        ₹25,000 - ₹50,000
                      </option>
                      <option value="50000-100000" className="text-white">
                        ₹50,000 - ₹1,00,000
                      </option>
                      <option value=">100000" className="text-white">
                        ₹1,00,000+
                      </option>
                    </select>
                  </div> */}

                  <button
                    type="submit"
                    disabled={submissionStatus !== "idle"}
                    className="w-full flex items-center justify-between bg-brandGreen hover:bg-green-400 border-2 border-black text-black py-3 md:py-4 px-4 rounded-md disabled:opacity-75"
                  >
                    {getButtonContent()}
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

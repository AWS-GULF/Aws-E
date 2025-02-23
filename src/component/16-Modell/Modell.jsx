import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import QualityAssurance from "../../assets/images/OFFf.svg";
import { useTranslation } from "react-i18next";

export default function Modell() {
    const { t, i18n } = useTranslation();
  
        const isArabic = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    closeModal();
  };

  return (
    <>
      <div onClick={openModal} className="cursor-pointer px-8 py-6  text-white dark:text-[#333]  rounded">
      {t("HeroSoftWareButtonContact")}
        {/* Contact Us Now */}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-[#EAF5F6] w-full max-w-3xl transform overflow-hidden rounded-2xl p-5 text-left align-middle shadow-xl transition-all relative">
                  <button type="button" onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                    <X size={24} />
                  </button>
                  <div className="flex sm:justify-start justify-center sm:items-center">
                    <img src={QualityAssurance} alt="Quality Assurance" />
                    <p className="ps-2 font-mons text-hover text-[#666] font-bold text-[16px] tracking-[1.6px] ">
                     {t("ModelTitle")}
                    </p>
                  </div>
                  <p className="font-mons sm:text-start pt-[10px] text-[25px] text-center sm:text-[40px] text-[#003540] font-bold text-primary">
                  {t("ModelTitle1")}
                  </p>

                  <div className="mt-6">
                    <form className="w-full" onSubmit={handleSubmit}>
                      <div className="flex-col px-6">
                        <div className="sm:flex sm:flex-row flex-col w-full justify-evenly  items-center gap-[30px]">
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full py-6 text-[#757575] px-[40px] mb-4 rounded-[10px]"
                            placeholder="Full Name"
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-6 text-[#757575] px-[40px] rounded-[10px]"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="sm:flex sm:flex-row flex-col w-full justify-evenly items-center gap-[30px] mt-4">
                          <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full text-[#757575] py-6 px-[40px] rounded-[10px] mb-4"
                            placeholder="Mobile Number"
                            required
                          />
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full text-[#757575] py-6 px-[40px] rounded-[10px]"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="flex w-full justify-center items-center mt-6">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full sm:h-[200px] text-[#757575] h-[50px] rounded-[10px] px-[40px]"
                            placeholder="Your Message"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex justify-center ">
                        <button type="submit" className="  text-white  ">
                     {t("ModelTitle2")}
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

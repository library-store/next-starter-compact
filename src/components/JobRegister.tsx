"use client";

import * as React from "react";
import { Button } from "./Elements/button";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { putPresignedUrl, uploadPresigned } from "@/app/api/coin";

export interface IJobRegisterProps {
  children?: React.ReactNode;
}

export default function JobRegister({}: IJobRegisterProps) {
  const [attachFile, setAttactFile] = React.useState<{
    [key: string | number]: any;
  }>({});
  const [loading, setLoading] = React.useState(false);

  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfE2QAC0h0vNRj37SJtBgDsYU5qAVYAg1FGRi1_vUHNrDmyAA/formResponse";

  const handleSubmit = () => {
    axios
      .post(FORM_ACTION_URL, {
        "entry.1368318470": "", // Full name
        "entry.1979596615": "", // Address
        "entry.1840010903": "", // Position Applied For
        "entry.1527449654": "Software Engineer", // Self Description
        "entry.1441207839_year": "",
        "entry.1441207839_month": "",
        "entry.1441207839_day": "",
        "entry.700957981": "", // CV Attachment
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAttactment = (files: File[]) => {
    setLoading(true);
    for (let file of Array.from(files)) {
      if (file instanceof File) {
        uploadPresigned(file.name)
          .then((res: any) => {
            console.log(res);
            putPresignedUrl(res.upload_url, file)
              .then(() => {
                setAttactFile({
                  name: file.name,
                  size: file.size,
                  type: file.type,
                  url: res.dst_url,
                });
              })
              .catch(() => {
                setLoading(false);
              });
          })
          .catch(() => {
            setLoading(false);
          });
      }
    }
  };

  const forceDownload = (url: string, filename: string) => {
    const xhr = new XMLHttpRequest();
    const downloadFilename = filename;

    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(this.response);
      const tag = document.createElement("a");

      tag.href = imageUrl;
      tag.download = downloadFilename;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  };
  console.log('2222222');
  return (
    <Formik
      enableReinitialize
      initialValues={{
        "entry.1368318470": "", // Full name
        "entry.1979596615": "", // Address
        "entry.1840010903": "", // Position Applied For
        "entry.1527449654": "", // Self Description
        "entry.1441207839": "", //dob
        "entry.700957981": "", // CV Attachment
      }}
      validationSchema={() => {
        return Yup.object().shape({
          'entry.1368318470': Yup.string().required(),
        });
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        
      }}
    >
      {(props) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldError,
        } = props;

        console.log('1111111');
        

        return (
          <form onSubmit={handleSubmit}>
            <div className="mx-auto content-container">
              <div className="poppins-bold text-[35px] mb-[28px]">
                Grow with Us – Apply Today
              </div>
              <div className="bg-[#F5F7FA] rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] p-[20px] md:p-[40px_75px]">
                <div className="md:grid grid-cols-2 gap-[18px] mb-10">
                  <div className="grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10 md:mb-0">
                    <div className="font-semibold text-sm">
                      Full name <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="text"
                      name="entry.1368318470"
                      value={values["entry.1368318470"]}
                      placeholder="Your name"
                      className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                      // onChange={handleChange}
                    />
                  </div>
                  <div className="grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
                    <div className="font-semibold text-sm">
                      Date of birth <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="date"
                      name="entry.1441207839"
                      placeholder="Date of birth"
                      className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10">
                  <div className="font-semibold text-sm">
                    Address <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="entry.1979596615"
                    placeholder="Your address"
                    className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10">
                  <div className="font-semibold text-sm">
                    Position Applied For<span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="entry.1840010903"
                    placeholder="Position Applied For"
                    className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10">
                  <div className="font-semibold text-sm">
                    Self Description (optional)
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="entry.1527449654"
                    placeholder="Self Description"
                    className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <div className="grow">
                    <div className="font-semibold text-sm mb-3">
                      CV Attachment<span className="text-red-500">*</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        id="file"
                        className="hidden"
                        onChange={(e: any) => handleAttactment(e.target.files)}
                      />
                      <label
                        htmlFor="file"
                        className=" text-white px-4 py-2 rounded-[7px] border border-solid border-[#D9D9D9] text-[#8C8C8C] font-bold"
                      >
                        Select File
                      </label>

                      <span className="ms-3">{attachFile?.name || ""}</span>
                      {attachFile.url && (
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            forceDownload(attachFile.url, attachFile.name)
                          }
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_456_216)">
                              <path
                                d="M2.25205 15.7462H15.7478C15.7478 15.6991 15.7478 15.6539 15.7478 15.6087C15.7478 14.5318 15.7478 13.4529 15.7478 12.3759C15.7478 11.7828 16.2016 11.2914 16.7854 11.2518C17.3823 11.2123 17.9001 11.6322 17.9811 12.2215C17.9886 12.2836 17.998 12.3458 17.998 12.4079C17.998 13.8803 18.0018 15.3527 17.998 16.8232C17.998 17.2995 17.7928 17.6629 17.3597 17.8851C17.1883 17.9717 17.0057 18 16.8155 18C12.7462 18 8.67699 18 4.60773 18C3.45531 18 2.30289 18 1.15235 18C0.49517 18 0.00369651 17.5142 0.00181347 16.8571C-6.9572e-05 15.3546 0.00181347 13.8502 0.00181347 12.3477C0.00181347 11.779 0.47634 11.2857 1.04502 11.2537C1.63441 11.2198 2.15601 11.6378 2.23134 12.2064C2.24263 12.2949 2.24828 12.3853 2.25017 12.4738C2.25017 13.5244 2.25017 14.5751 2.25017 15.6257C2.25017 15.6633 2.25017 15.701 2.25017 15.75L2.25205 15.7462Z"
                                fill="#3C3C3C"
                              />
                              <path
                                d="M10.1513 9.63636C10.4149 9.37088 10.6767 9.1054 10.9403 8.8418C11.5222 8.25812 12.1021 7.67255 12.6878 7.09452C13.328 6.46377 14.3712 6.74808 14.5859 7.61042C14.6894 8.02653 14.5708 8.3918 14.2714 8.69306C12.8836 10.0826 11.4939 11.4703 10.1061 12.8579C10.0063 12.9577 9.90839 13.0575 9.80858 13.1573C9.34159 13.6186 8.64863 13.6205 8.18352 13.1554C6.69215 11.6642 5.20078 10.1749 3.71129 8.68176C3.08612 8.05477 3.36105 7.01732 4.21218 6.79326C4.6321 6.68218 5.00118 6.79326 5.30623 7.09829C6.11405 7.90226 6.92 8.71 7.72406 9.51586C7.76548 9.55728 7.79749 9.60623 7.83516 9.65142C7.84834 9.64577 7.86152 9.64013 7.8747 9.6326C7.8747 9.57799 7.8747 9.52151 7.8747 9.4669C7.8747 7.29975 7.8747 5.13259 7.8747 2.96544C7.8747 2.3554 7.8747 1.74724 7.8747 1.1372C7.8747 0.545983 8.28897 0.0828033 8.88024 0.00748951C9.42256 -0.0602929 9.95169 0.310628 10.0873 0.862301C10.1118 0.963975 10.1212 1.0713 10.1212 1.17485C10.1212 3.94264 10.1212 6.7123 10.1212 9.48008V9.61942C10.1212 9.61942 10.1381 9.62883 10.1475 9.63448L10.1513 9.63636Z"
                                fill="#3C3C3C"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_456_216">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-[#999999] text-[13px] mt-2">
                    Upload a jpg, pdf, png no larger than 100 MB
                  </div>
                </div>

                <div className="text-center mt-[35px]">
                  <Button
                    type="submit"
                    className="rounded-full w-[170px] h-[43px] bg-gradient-to-r from-[#0253F1] to-[#14A1FE] text-white font-extrabold text-[22px]"
                    // onClick={() => handleSubmit()}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

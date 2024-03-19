"use client";

import * as React from "react";
import { Button } from "./Elements/button";
import axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { putPresignedUrl, uploadPresigned } from "@/app/api/coin";
import { values } from "lodash";
import { transformObjToUrlQuery } from "@/app/api/utils";
import Dialog from "./Elements/Dialog";
import path from "path";

export interface IJobRegisterProps {
  children?: React.ReactNode;
}

export default function JobRegister({}: IJobRegisterProps) {
  const [attachFile, setAttactFile] = React.useState<{
    [key: string | number]: any;
  }>({});
  const [loading, setLoading] = React.useState(false);
  const [submited, setSubmited] = React.useState(false);

  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfE2QAC0h0vNRj37SJtBgDsYU5qAVYAg1FGRi1_vUHNrDmyAA/formResponse";

  const handleSubmit = (values: { [x: string]: any; }, setSubmitting: any) => {
    const data = {
      "entry.1368318470": values["1368318470"], // Full name
      "entry.1979596615": values["1979596615"], // Address
      "entry.700957981": values["700957981"], // CV Attachment
      "entry.1527449654": values["1527449654"], // Self Description
      "entry.1441207839": values["1441207839"], // dob
      "entry.1840010903": values["1840010903"], // Position Applied For
    };

    fetch(FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data),
    })
      .then(() => {
        setSubmitting(false);
        setSubmited(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
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

                formik.setFieldValue("700957981", res.dst_url);
                setLoading(false);
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

  const formik = useFormik({
    initialValues: {
      "1368318470": "", // Full name
      "1979596615": "", // Address
      "1840010903": "", // Position Applied For
      "1527449654": "", // Self Description
      "1441207839": "", //dob
      "700957981": "", // CV Attachment
    },
    validationSchema: yup.object({
      '1368318470': yup.string().required(`Name is a required`),
      '1979596615': yup.string().required(`Address is a required`),
      '1840010903': yup.string().required(`Position is a required`),
      '1527449654': yup.string().required(`Self description is a required`),
      '1441207839': yup.string().required(`Date of Birth is a required`),
      '700957981': yup.string().required(`CV is a required`),
    }),
    onSubmit: (values: any, { setSubmitting }: any) => {
      console.log('values', values);
      handleSubmit(values, setSubmitting);
    },
  });
    
  return (
    <form onSubmit={formik.handleSubmit}>
      {submited ? <Dialog show={true} timeClose={4000}>
        <div className="text-center">
          
        <svg className="mx-auto" width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62" cy="62" r="62" fill="url(#paint0_linear_462_351)"/>
          <path d="M54.7052 70.4392C60.2745 64.9347 65.6232 59.6452 70.9813 54.3603C75.8419 49.5655 80.7048 44.7707 85.5794 39.9875C87.5015 38.101 89.8414 37.5624 92.3809 38.3507C94.9414 39.146 96.4692 40.9978 96.9081 43.6055C97.2719 45.7648 96.5397 47.6536 94.9907 49.1817C85.577 58.4777 76.1423 67.7552 66.7169 77.0396C64.5061 79.2173 62.2061 81.3188 60.1126 83.6006C57.1578 86.821 52.5601 86.7609 49.5043 83.6538C42.7897 76.8245 35.8803 70.178 29.067 63.4412C26.5323 60.9352 26.3211 57.4142 28.4756 54.647C30.8507 51.5953 35.4578 51.2809 38.2953 54.0505C43.4609 59.0903 48.5843 64.1718 53.7171 69.2417C54.0457 69.5653 54.3109 69.9514 54.7099 70.4369L54.7052 70.4392Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_462_351" x1="62" y1="0" x2="62" y2="124" gradientUnits="userSpaceOnUse">
          <stop stopColor="#139CFE"/>
          <stop offset="1" stopColor="#045AF3"/>
          </linearGradient>
          </defs>
        </svg>
        <div className="poppins-bold text-xl mt-5">Thanks for submitting</div>
        <div className="poppins-medium text-[1.125] mt-2">
          <div>We will contact you</div>
          <div>as soon as possible</div>
        </div>
        </div>
      </Dialog> : null}
      <div className="mx-auto content-container">
        <div className="poppins-bold text-[35px] mb-[28px]">
          Grow with Us - Apply Today
        </div>
        <div className="bg-[#F5F7FA] rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] p-[20px] md:p-[40px_75px]">
          <div className="md:grid grid-cols-2 gap-[18px] mb-10">
            <div>
              <div className="grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0] mb-10 md:mb-0">
                <div className="font-semibold text-sm">
                  Full name <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="1368318470"
                  value={formik?.values["1368318470"]}
                  placeholder="Your name"
                  className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                  // required
                  onChange={formik.handleChange}
                />
                
              </div>
              {formik.errors['1368318470'] && formik.touched['1368318470'] ? (
                <div className="text-red-500 ps-[18px]">{formik.errors['1368318470']}</div>
              ) : null}
            </div>
            <div>
              <div className="grow bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
                  <div className="font-semibold text-sm">
                    Date of birth <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="date"
                    name="1441207839"
                    placeholder="Date of birth"
                    className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                    onChange={formik.handleChange}
                    // required
                  />
              </div>
              {formik.errors['1441207839'] && formik.touched['1441207839'] ? (
                <div className="text-red-500 ps-[18px]">{formik.errors['1441207839']}</div>
              ) : null}
            </div>
          </div>

          <div className="mb-10">
            <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
              <div className="font-semibold text-sm">
                Address <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="1979596615"
                placeholder="Your address"
                className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                onChange={formik.handleChange}
                // required
              />
              
            </div>
            {formik.errors['1979596615'] && formik.touched['1979596615'] ? (
                  <div className="text-red-500 ps-[18px]">{formik.errors['1979596615']}</div>
                ) : null}
          </div>
          <div className="mb-10">
            <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
              <div className="font-semibold text-sm">
                Position Applied For<span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="1840010903"
                placeholder="Position Applied For"
                className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                onChange={formik.handleChange}
                // required
              />
            </div>
            
            {formik.errors['1840010903'] && formik.touched['1840010903'] ? (
                <div className="text-red-500 ps-[18px]">{formik.errors['1840010903']}</div>
              ) : null}
          </div>
          <div className="mb-10">
            <div className="bg-white rounded-xl p-[8px_18px] border border-solid border-[#F0F0F0]">
              <div className="font-semibold text-sm">
                Self Description (optional)
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="1527449654"
                placeholder="Self Description"
                className="w-full outline-0 placeholder:font-bold placeholder:text-[15px]"
                onChange={formik.handleChange}
                // required
              />
            </div>
            {formik.errors['1527449654'] && formik.touched['1527449654'] ? (
                <div className="text-red-500 ps-[18px]">{formik.errors['1527449654']}</div>
              ) : null}
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
                  disabled={loading}
                />
                <label
                  htmlFor="file"
                  className=" px-4 py-2 rounded-[7px] border border-solid border-[#D9D9D9] text-[#8C8C8C] font-bold"
                >
                  {loading ? <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>Uploading...
                  </span> : `Select File`}
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
            {formik.errors['700957981'] && formik.touched['700957981'] ? (
                <div className="text-red-500">{formik.errors['700957981']}</div>
              ) : null}
          </div>

          <div className="text-center mt-[35px]">
            <Button
              type="submit"
              className="rounded-full w-[170px] h-[43px] bg-gradient-to-r from-[#0253F1] to-[#14A1FE] text-white font-extrabold text-[22px]"
              disabled={formik.isSubmitting}
            >
              { formik.isSubmitting ? <svg className="animate-spin -ml-1 h-5 w-5 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : 'Submit' }
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

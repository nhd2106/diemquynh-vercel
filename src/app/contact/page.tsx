"use client";
import { Mail, PhoneIcon } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { verifyCaptcha } from "@/app/actions";
import { useRef, useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const fields = {
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  message: "Message",
};

function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    setLoading(true);
    await verifyCaptcha(token)
      .then(() => {
        setIsverified(true);
        setLoading(false);
      })
      .catch(() => {
        setIsverified(false);
        setLoading(false);
      });
  }

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const templateParams = data;
    if (!isVerified) {
      alert("Please verify captcha!");
      setLoading(false);
      return;
    }

    try {
      const res = await send(
        "service_a5gqqo2",
        "template_cnbbtdm",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
          process.env.EMAILJS_PUBLIC_KEY
      );
      console.log(res);
      alert("Email sent! We will get back to you soon!");
      reset();
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Failed to send email. Please try again later!");
      setLoading(false);
    }

    setLoading(false);
  };

  const readError = (field: keyof FormValues) => {
    let error = "";
    if (errors?.[field]?.type === "required")
      error = `${fields[field]} is required!`;

    return error ? (
      <p role="alert" className="text-red-400">
        {error}
      </p>
    ) : null;
  };

  return (
    <div className="text-white">
      <div
        style={{
          backgroundImage: "url('/ice-fish-bath.webp')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-64 relative"
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full" />
        <div className="relative z-10 flex md:ml-20">
          <div>
            <h1 className="text-4xl">Contact</h1>
            <p>Don&apos;t hesitate to contact with us.</p>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Got questions about our seafood exports? We&aposre here to help!
                Whether it&apos;s Barramundi, Grouper, Red Snapper, or any other
                exquisite seafood, we&aposre ready to provide all the info you
                need. Reach out through the contact form, email, or phone number
                provided. Let&aposs make your seafood experience exceptional
                together. Get in touch today!
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>44 Tay Son District</p>
                    <p>Tan Quy Ward, Tan Phu District, HCMC, Vietnam.</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+84 0908 136 359</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <Mail
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">myngo@vanthinhseafoods.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                className="grid grid-cols-1 gap-y-6 text-black"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Full name"
                    {...register("fullName", { required: true })}
                    disabled={loading}
                  />
                  {readError("fullName")}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    disabled={loading}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {readError("email")}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    autoComplete="tel"
                    disabled={loading}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Phone"
                    {...register("phone", { required: true })}
                  />
                  {readError("phone")}
                </div>
                <div className="text-black">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    disabled={loading}
                    id="message"
                    rows={4}
                    className="block !text-black w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    {...register("message", { required: true })}
                  />
                  {readError("message")}
                </div>
                <div className="">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                  <div className="mt-5">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      ref={recaptchaRef}
                      onChange={handleCaptchaSubmission}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

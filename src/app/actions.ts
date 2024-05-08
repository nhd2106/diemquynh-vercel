
"use server";

export async function verifyCaptcha(token: string | null) {
    // This function will be run server-side
    //   post to url     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, 
      {
        method: "POST"
      }
    );
    const data = await response.json();
    if (data?.success) {
        return "success!"
      } else {
        throw new Error("Failed Captcha")
      }
  }
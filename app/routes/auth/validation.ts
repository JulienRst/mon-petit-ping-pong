import { z } from "zod";

const firstnameValidation = z.string().min(1).max(128);
const lastnameValidation = z.string().min(1).max(128);
const emailValidation = z.string().email();
const passwordValidation = z.string().min(8).max(128);

export const signUpFormSchema = z.object({
  firstname: firstnameValidation,
  lastname: lastnameValidation,
  email: emailValidation,
  password: passwordValidation,
});

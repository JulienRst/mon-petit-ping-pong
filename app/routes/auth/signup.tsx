import { useTranslation } from "react-i18next";
import { Form, data, redirect } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import type { Route } from "./+types/signup";
import { authClient } from "~/lib/auth-client";
import { signUpFormSchema } from "./validation";

export async function action({ params, request }: Route.ActionArgs) {
  const formData = await request.formData();
  const payload = signUpFormSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!payload.success) {
    return data({ errors: payload.error });
  }

  const { email, password, firstname, lastname } = payload.data;

  const { data: result, error } = await authClient.signUp.email({
    email,
    password,
    name: `${firstname} ${lastname}`,
  });

  if (error) {
    console.log(error);
    return data({ error });
  }

  console.log(result);

  redirect("/signup");
}

export default function signIn() {
  const { t } = useTranslation("", { keyPrefix: "auth.signup.profile" });

  return (
    <div className="flex w-full grow flex-col justify-center">
      <Form method="POST" className="flex w-full flex-col gap-9">
        <h1 className="font-title text-2xl">{t("title")}</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label className="block font-semibold" htmlFor="firstname">
              {t("form.firstname")}
            </Label>
            <Input id="firstname" autoComplete="given-name" name="firstname" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="block font-semibold" htmlFor="lastname">
              {t("form.lastname")}
            </Label>
            <Input id="lastname" autoComplete="family-name" name="lastname" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="block font-semibold" htmlFor="email">
              {t("form.email")}
            </Label>
            <Input id="email" autoComplete="email" type="email" name="email" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="block font-semibold" htmlFor="password">
              {t("form.password")}
            </Label>
            <Input
              id="password"
              autoComplete="current-password"
              type="password"
              name="password"
            />
          </div>
        </div>
        <Button size="lg" variant="secondary" type="submit">
          {t("form.submit")}
        </Button>
      </Form>
    </div>
  );
}

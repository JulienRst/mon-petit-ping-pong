import { useTranslation } from "react-i18next";
import Logo from "app/assets/images/logo.png";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export default function Welcome() {
  const { t } = useTranslation();
  return (
    <div className="flex h-dvh flex-col justify-center gap-3 pr-9 pl-9">
      <img
        className="w-full max-w-[245px] self-center"
        src={Logo}
        alt={t("common.logo.alt")}
      />
      <p className="text-center">{t("common.logo.baseline")}</p>
      <div className="flex flex-col gap-6">
        <Link className="block" to="/signup">
          <Button className="w-full" size="lg">
            {t("auth.signup.label")}
          </Button>
        </Link>
        <Button size="lg" variant="secondary">
          {t("auth.signin.label")}
        </Button>
      </div>
    </div>
  );
}

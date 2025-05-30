import { Outlet, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import LogoInline from "app/assets/images/logo_inline.png";

export default function authLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex h-dvh w-full flex-col p-9">
      <Button
        className="absolute top-3.5 left-3.5 text-2xl"
        variant="ghost"
        onClick={() => navigate(-1)}
        size="icon"
      >
        ←
      </Button>
      <img
        className="w-full max-w-[184px] self-center"
        src={LogoInline}
        alt="Mon petit Ping-Pong!"
      />
      <div className="flex grow flex-col">
        <Outlet />
      </div>
    </div>
  );
}

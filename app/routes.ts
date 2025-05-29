import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),
  layout("routes/auth/layout.tsx", [route("signin", "routes/auth/signin.tsx")]),
] satisfies RouteConfig;

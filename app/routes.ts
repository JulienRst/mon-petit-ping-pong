import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),
  layout("routes/auth/layout.tsx", [route("signup", "routes/auth/signup.tsx")]),
  route("api/auth/*", "routes/api.auth.$.ts"),
] satisfies RouteConfig;

import { Router } from "express";
import { BlogRouter } from "../modules/Blog/blog.route";
import { UserRoute } from "../modules/User/user.route";
import { AdminRoute } from "../modules/admin/admin.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoute,
  },

  {
    path: "/admin",
    route: AdminRoute,
  },

  {
    path: "/blogs",
    route: BlogRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from "express";
import { AcademicDepartmentRoute } from "../modules/academicDepartment/academicDepartment.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { AdminRoute } from "../modules/admin/admin.route";
import { CourseRoute } from "../modules/course/course.route";
import { FacultyRouter } from "../modules/faculty/faculty.route";
import { UserRoute } from "../modules/User/user.route";
import { AuthRoute } from "../modules/Auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/academic-semester",
    route: AcademicSemesterRoute,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRoutes,
  },
  {
    path: "/academic-department",
    route: AcademicDepartmentRoute,
  },
  {
    path: "/faculty",
    route: FacultyRouter,
  },
  {
    path: "/admin",
    route: AdminRoute,
  },
  {
    path: "/course",
    route: CourseRoute,
  },
  {
    path: "/user",
    route: UserRoute,
  },
  {
    path: "/login",
    route: AuthRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

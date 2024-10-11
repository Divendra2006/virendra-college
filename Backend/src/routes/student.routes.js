import { Router } from "express";
import { addStudent, changeCurrentPssword, deleteStudentAccount, getCurrentStudent, getStudentByRollno, getStudentsByClass, loginStudent, logoutStudent, refreshAccessToken, registerStudent, updateAccountDetails } from "../controllers/student.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1,
        }
    ]),
    registerStudent)


router.route("/login").post(loginStudent)
router.route("/logout").post(verifyJWT,logoutStudent)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPssword)
router.route("/current-student").get(verifyJWT,getCurrentStudent)
router.route("/update-account").patch(verifyJWT,updateAccountDetails)
router.route("/delete-account").delete(deleteStudentAccount)
router.route("/addStudent").post(addStudent)
router.route("/student/Rollno").get(getStudentByRollno)
router.route("/student/Class").get(getStudentsByClass)


export default router
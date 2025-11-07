import { Router } from 'express';
import * as properties from '../../controllers/Propertiescontroller.js';
import * as user from '../../controllers/User.controller.js';
import checkauth from "../../middleware/Checkauth.js"
import { propertyUpload } from "../../middleware/upload.js";

const router = Router();

router.put("/properties/:id", checkauth,properties.editProperty);
router.delete("/properties/:id",checkauth, properties.deleteProperty);
router.get("/count",checkauth,properties.getcount);
router.post("/properties", checkauth,propertyUpload.array("images", 5), properties.addProperties);
router.get("/users",checkauth,user.getuser);


export default router;
import express from "express";
import {
    updateRoom,
    deleteRoom,
    getRoom,
    getRooms,
    createRoom,
    updateRoomAvailability
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/:hotelId", createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//UPDATE AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;

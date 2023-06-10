//  const connectDB = require( "../../utils/connectDB");

import { NextResponse } from "next/server";

// const express = require("express");
// const { uploadFile } = require("./middleware/multer");
// const { NotFounError, ErrorHandler } = require("../../utils/errorHandler");
// const { Image } = require("../store/models/image");
import connectDB from "../connectDB";

export async function POST(req, res) {
  await connectDB();
    const name = req.body.name;
    // return NextResponse.json(console.log("db"));

    const user = new User({ name });
    await user.save();

    res.status(201).json({
      status: "success",
      message: "data createdddd",
      data: { name },
    });
  

  console.log("5555555555");
}

///////////////////////////////////
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// // connectDB();

// app.post("/upload-single", uploadFile.single("image"), (req, res) => {
//   res.send(req.file);
//   // Image.create(req.file);
// });

// app.post("/upload-array", uploadFile.array("image", 3), (req, res) => {
//   res.send(req.files);
// });

// app.post(
//   "/upload-fields",
//   uploadFile.fields([
//     {
//       name: "image",
//       maxCount: 2,
//     },
//     {
//       name: "file",
//       maxCount: 1,
//     },
//   ]),
//   (req, res) => {
//     res.send(req.files);
//   }
// );

// app.use(NotFounError);
// app.use(ErrorHandler);

// // if(req.method === "POST") {
// //   const name = req.body.name;

// // }

// app.listen(3000, () => {
//   console.log("server runnin on port 3000");
// });

"use strict";

import { Response, Request } from "express";
import processImage from "../utils/processImage";

/**
 * Read image text.
 * @route POST /api/read-image
 */
export const readImageText = (req: Request, res: Response) => {
  const { imageUrl, language } = req.body;
  if (!imageUrl) {
    res.status(400).send({ message: "Missing imageUrl" });
    return;
  }
  if (!imageUrl?.startsWith("http")) {
    res.status(400).send({ message: "Invalid imageUrl" });
    return;
  }
  processImage(imageUrl, language)
    .then((text) => {
      res.status(200).send({ imageText: text });
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: error?.message || "Internal Server Error" });
    });
};

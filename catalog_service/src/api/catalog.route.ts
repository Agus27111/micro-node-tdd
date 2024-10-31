import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// endpoints
router.post(
  "/product",
  asyncHandler(async (req: Request, res: Response) => {
    return res.status(201).json({});
  })
);

export default router;

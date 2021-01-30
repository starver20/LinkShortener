import express, { Request, Response, NextFunction } from "express";

export const Redirect = (req: Request, res: Response, next: NextFunction) => {
  res.send("Inside the Redirect controller");
};
export const AddUrl = (req: Request, res: Response, next: NextFunction) => {};

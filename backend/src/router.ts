import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello" })
})


export default router;

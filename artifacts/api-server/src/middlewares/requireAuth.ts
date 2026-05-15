import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    const secret = process.env.SUPABASE_JWT_SECRET ?? "";
    const decoded = jwt.verify(token, secret) as { sub: string; email?: string };
    (req as Request & { userId: string }).userId = decoded.sub;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

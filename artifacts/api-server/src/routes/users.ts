import { Router } from "express";
import { db } from "@workspace/db";
import { usersTable, insertUserSchema } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

// GET /api/users/me — fetch current user profile
router.get("/me", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.id, userId));
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/users/me — upsert user profile (called after sign-in/sign-up)
router.post("/me", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertUserSchema.safeParse({ ...req.body, id: userId });
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }
  try {
    const [existing] = await db.select().from(usersTable).where(eq(usersTable.id, userId));
    if (existing) {
      const [updated] = await db
        .update(usersTable)
        .set({ ...parsed.data, updatedAt: new Date() })
        .where(eq(usersTable.id, userId))
        .returning();
      res.json(updated);
      return;
    }
    const [created] = await db.insert(usersTable).values(parsed.data).returning();
    res.status(201).json(created);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PATCH /api/users/me — update profile fields
router.patch("/me", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const [updated] = await db
      .update(usersTable)
      .set({ ...req.body, updatedAt: new Date() })
      .where(eq(usersTable.id, userId))
      .returning();
    res.json(updated);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

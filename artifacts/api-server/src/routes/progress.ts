import { Router } from "express";
import { db } from "@workspace/db";
import { progressTable, savedResourcesTable, insertProgressSchema, insertSavedResourceSchema } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();
type AuthReq = typeof router extends Router ? any : never;

// GET /api/progress — get all progress for current user
router.get("/", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(progressTable).where(eq(progressTable.userId, userId));
    res.json(rows);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/progress — mark a topic complete
router.post("/", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertProgressSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    const [row] = await db.insert(progressTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PATCH /api/progress/:id — update (e.g. mark complete)
router.patch("/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const [row] = await db
      .update(progressTable)
      .set({ ...req.body, completedAt: req.body.completed ? new Date() : null })
      .where(and(eq(progressTable.id, Number(req.params.id)), eq(progressTable.userId, userId)))
      .returning();
    res.json(row);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/progress/:id
router.delete("/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    await db.delete(progressTable)
      .where(and(eq(progressTable.id, Number(req.params.id)), eq(progressTable.userId, userId)));
    res.status(204).send();
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/progress/saved — get saved resources
router.get("/saved", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(savedResourcesTable).where(eq(savedResourcesTable.userId, userId));
    res.json(rows);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/progress/saved — bookmark a resource
router.post("/saved", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertSavedResourceSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    const [row] = await db.insert(savedResourcesTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/progress/saved/:id
router.delete("/saved/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    await db.delete(savedResourcesTable)
      .where(and(eq(savedResourcesTable.id, Number(req.params.id)), eq(savedResourcesTable.userId, userId)));
    res.status(204).send();
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

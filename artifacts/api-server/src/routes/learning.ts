import { Router } from "express";
import { db } from "@workspace/db";
import {
  reflectionsTable, insertReflectionSchema,
  mistakesTable, insertMistakeSchema,
  confidenceTable, insertConfidenceSchema,
  badgesTable, insertBadgeSchema,
  studyPlansTable, insertStudyPlanSchema,
} from "@workspace/db";
import { eq, and, desc } from "drizzle-orm";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

// ── Reflections ──────────────────────────────────────────────────────
router.get("/reflections", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(reflectionsTable)
      .where(eq(reflectionsTable.userId, userId))
      .orderBy(desc(reflectionsTable.createdAt));
    res.json(rows);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.post("/reflections", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertReflectionSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    const [row] = await db.insert(reflectionsTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.delete("/reflections/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    await db.delete(reflectionsTable)
      .where(and(eq(reflectionsTable.id, Number(req.params.id)), eq(reflectionsTable.userId, userId)));
    res.status(204).send();
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

// ── Mistakes ─────────────────────────────────────────────────────────
router.get("/mistakes", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(mistakesTable)
      .where(eq(mistakesTable.userId, userId))
      .orderBy(desc(mistakesTable.createdAt));
    res.json(rows);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.post("/mistakes", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertMistakeSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    const [row] = await db.insert(mistakesTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.patch("/mistakes/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const [row] = await db.update(mistakesTable).set(req.body)
      .where(and(eq(mistakesTable.id, Number(req.params.id)), eq(mistakesTable.userId, userId)))
      .returning();
    res.json(row);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.delete("/mistakes/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    await db.delete(mistakesTable)
      .where(and(eq(mistakesTable.id, Number(req.params.id)), eq(mistakesTable.userId, userId)));
    res.status(204).send();
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

// ── Confidence ───────────────────────────────────────────────────────
router.get("/confidence", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(confidenceTable)
      .where(eq(confidenceTable.userId, userId))
      .orderBy(desc(confidenceTable.createdAt));
    res.json(rows);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.post("/confidence", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertConfidenceSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    const [row] = await db.insert(confidenceTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

// ── Badges ───────────────────────────────────────────────────────────
router.get("/badges", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(badgesTable).where(eq(badgesTable.userId, userId));
    res.json(rows);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.post("/badges", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertBadgeSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    // Idempotent — only award once
    const existing = await db.select().from(badgesTable)
      .where(and(eq(badgesTable.userId, userId), eq(badgesTable.badgeId, parsed.data.badgeId)));
    if (existing.length > 0) { res.json(existing[0]); return; }
    const [row] = await db.insert(badgesTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

// ── Study Plans ──────────────────────────────────────────────────────
router.get("/study-plans", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    const rows = await db.select().from(studyPlansTable)
      .where(eq(studyPlansTable.userId, userId))
      .orderBy(desc(studyPlansTable.createdAt));
    res.json(rows);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.post("/study-plans", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const parsed = insertStudyPlanSchema.safeParse({ ...req.body, userId });
  if (!parsed.success) { res.status(400).json({ error: parsed.error.issues }); return; }
  try {
    const [row] = await db.insert(studyPlansTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

router.delete("/study-plans/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  try {
    await db.delete(studyPlansTable)
      .where(and(eq(studyPlansTable.id, Number(req.params.id)), eq(studyPlansTable.userId, userId)));
    res.status(204).send();
  } catch (err) { req.log.error(err); res.status(500).json({ error: "Internal server error" }); }
});

export default router;

import { pgTable, text, timestamp, integer, boolean, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const reflectionsTable = pgTable("reflections", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  learnedToday: text("learned_today").notNull(),
  stillConfusing: text("still_confusing"),
  strategyHelped: text("strategy_helped"),
  reviewNext: text("review_next"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertReflectionSchema = createInsertSchema(reflectionsTable).omit({ id: true, createdAt: true });
export type InsertReflection = z.infer<typeof insertReflectionSchema>;
export type Reflection = typeof reflectionsTable.$inferSelect;

export const mistakesTable = pgTable("mistakes", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  mistake: text("mistake").notNull(),
  correctStrategy: text("correct_strategy").notNull(),
  needsReview: boolean("needs_review").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertMistakeSchema = createInsertSchema(mistakesTable).omit({ id: true, createdAt: true });
export type InsertMistake = z.infer<typeof insertMistakeSchema>;
export type Mistake = typeof mistakesTable.$inferSelect;

export const confidenceTable = pgTable("confidence", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  rating: integer("rating").notNull(), // 1-5
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertConfidenceSchema = createInsertSchema(confidenceTable).omit({ id: true, createdAt: true });
export type InsertConfidence = z.infer<typeof insertConfidenceSchema>;
export type Confidence = typeof confidenceTable.$inferSelect;

export const badgesTable = pgTable("badges", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  badgeId: text("badge_id").notNull(),
  earnedAt: timestamp("earned_at").notNull().defaultNow(),
});

export const insertBadgeSchema = createInsertSchema(badgesTable).omit({ id: true });
export type InsertBadge = z.infer<typeof insertBadgeSchema>;
export type Badge = typeof badgesTable.$inferSelect;

export const studyPlansTable = pgTable("study_plans", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  grade: text("grade").notNull(),
  subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  confidence: text("confidence").notNull(),
  testDate: text("test_date"),
  plan: text("plan").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertStudyPlanSchema = createInsertSchema(studyPlansTable).omit({ id: true, createdAt: true });
export type InsertStudyPlan = z.infer<typeof insertStudyPlanSchema>;
export type StudyPlan = typeof studyPlansTable.$inferSelect;

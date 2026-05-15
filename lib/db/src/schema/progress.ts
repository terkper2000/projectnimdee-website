import { pgTable, text, timestamp, integer, boolean, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const progressTable = pgTable("progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  resourceHref: text("resource_href"),
  completed: boolean("completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertProgressSchema = createInsertSchema(progressTable).omit({ id: true, createdAt: true });
export type InsertProgress = z.infer<typeof insertProgressSchema>;
export type Progress = typeof progressTable.$inferSelect;

export const savedResourcesTable = pgTable("saved_resources", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  href: text("href").notNull(),
  subject: text("subject"),
  tag: text("tag").notNull().default("Saved for Later"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertSavedResourceSchema = createInsertSchema(savedResourcesTable).omit({ id: true, createdAt: true });
export type InsertSavedResource = z.infer<typeof insertSavedResourceSchema>;
export type SavedResource = typeof savedResourcesTable.$inferSelect;

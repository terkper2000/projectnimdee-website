import { supabase } from "./supabase";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

async function apiFetch(path: string, options: RequestInit = {}) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const authHeader: Record<string, string> = session?.access_token
    ? { Authorization: `Bearer ${session.access_token}` }
    : {};

  const res = await fetch(`${BASE}/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeader,
      ...(options.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `HTTP ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  // Users
  getMe: () => apiFetch("/users/me"),
  createMe: (data: object) =>
    apiFetch("/users/me", { method: "POST", body: JSON.stringify(data) }),
  updateMe: (data: object) =>
    apiFetch("/users/me", { method: "PATCH", body: JSON.stringify(data) }),

  // Progress
  getProgress: () => apiFetch("/progress"),
  addProgress: (data: object) =>
    apiFetch("/progress", { method: "POST", body: JSON.stringify(data) }),
  updateProgress: (id: number, data: object) =>
    apiFetch(`/progress/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteProgress: (id: number) => apiFetch(`/progress/${id}`, { method: "DELETE" }),

  // Saved resources
  getSaved: () => apiFetch("/progress/saved"),
  saveResource: (data: object) =>
    apiFetch("/progress/saved", { method: "POST", body: JSON.stringify(data) }),
  unsaveResource: (id: number) => apiFetch(`/progress/saved/${id}`, { method: "DELETE" }),

  // Reflections
  getReflections: () => apiFetch("/learning/reflections"),
  addReflection: (data: object) =>
    apiFetch("/learning/reflections", { method: "POST", body: JSON.stringify(data) }),
  deleteReflection: (id: number) =>
    apiFetch(`/learning/reflections/${id}`, { method: "DELETE" }),

  // Mistakes
  getMistakes: () => apiFetch("/learning/mistakes"),
  addMistake: (data: object) =>
    apiFetch("/learning/mistakes", { method: "POST", body: JSON.stringify(data) }),
  updateMistake: (id: number, data: object) =>
    apiFetch(`/learning/mistakes/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteMistake: (id: number) =>
    apiFetch(`/learning/mistakes/${id}`, { method: "DELETE" }),

  // Confidence
  getConfidence: () => apiFetch("/learning/confidence"),
  addConfidence: (data: object) =>
    apiFetch("/learning/confidence", { method: "POST", body: JSON.stringify(data) }),

  // Badges
  getBadges: () => apiFetch("/learning/badges"),
  awardBadge: (badgeId: string) =>
    apiFetch("/learning/badges", { method: "POST", body: JSON.stringify({ badgeId }) }),

  // Study plans
  getStudyPlans: () => apiFetch("/learning/study-plans"),
  createStudyPlan: (data: object) =>
    apiFetch("/learning/study-plans", { method: "POST", body: JSON.stringify(data) }),
  deleteStudyPlan: (id: number) =>
    apiFetch(`/learning/study-plans/${id}`, { method: "DELETE" }),
};

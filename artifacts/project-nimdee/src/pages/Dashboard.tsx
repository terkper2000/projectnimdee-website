import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@workspace/replit-auth-web";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { api } from "@/lib/api";
import {
  BookOpen, Brain, Target, Star, Award, Clock, Lightbulb,
  Plus, Trash2, CheckCircle, XCircle, ChevronRight, Flame,
  BarChart2, Bookmark, AlertTriangle, TrendingUp, CalendarDays,
  LogOut, User, Settings,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const BADGE_DEFS = [
  { id: "first_login",      icon: "🎉", label: "First Login",            desc: "Joined Project Nimdeɛ" },
  { id: "first_saved",      icon: "🔖", label: "First Resource Saved",   desc: "Saved your first resource" },
  { id: "first_reflection", icon: "💭", label: "First Reflection",       desc: "Completed a learning reflection" },
  { id: "first_mistake",    icon: "🧩", label: "Mistake Logged",         desc: "Tracked a mistake to learn from" },
  { id: "study_plan",       icon: "📋", label: "Study Planner",          desc: "Created a study plan" },
  { id: "math_progress",    icon: "📐", label: "Math Progress",          desc: "Completed a Math resource" },
  { id: "science_progress", icon: "🔬", label: "Science Progress",       desc: "Completed a Science resource" },
  { id: "cs_progress",      icon: "💻", label: "CS Progress",            desc: "Completed a CS resource" },
  { id: "streak_3",         icon: "🔥", label: "3-Day Streak",           desc: "Logged in 3 days in a row" },
];

const SUBJECTS = ["Mathematics", "Science", "Computer Science", "Biology", "Robotics"];
const GRADES = ["Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Post-secondary"];
const CONFIDENCE_LEVELS = ["low","medium","high"] as const;

type Tab = "overview" | "progress" | "saved" | "plan" | "reflect" | "mistakes" | "confidence" | "badges";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const qc = useQueryClient();
  const [tab, setTab] = useState<Tab>("overview");

  const { data: progress = [] } = useQuery({ queryKey: ["progress"], queryFn: api.getProgress });
  const { data: saved = [] } = useQuery({ queryKey: ["saved"], queryFn: api.getSaved });
  const { data: reflections = [] } = useQuery({ queryKey: ["reflections"], queryFn: api.getReflections });
  const { data: mistakes = [] } = useQuery({ queryKey: ["mistakes"], queryFn: api.getMistakes });
  const { data: confidence = [] } = useQuery({ queryKey: ["confidence"], queryFn: api.getConfidence });
  const { data: badges = [] } = useQuery({ queryKey: ["badges"], queryFn: api.getBadges });
  useEffect(() => {
    if ((badges as any[]).length === 0) {
      api.awardBadge("first_login").then(() => qc.invalidateQueries({ queryKey: ["badges"] }));
    }
  }, [(badges as any[]).length === 0]);
  const { data: studyPlans = [] } = useQuery({ queryKey: ["study-plans"], queryFn: api.getStudyPlans });

  const firstName = user?.firstName ?? "there";
  const earnedBadgeIds = new Set((badges as any[]).map((b: any) => b.badgeId));

  const completedCount = (progress as any[]).filter((p: any) => p.completed).length;
  const subjectProgress = SUBJECTS.map(s => {
    const items = (progress as any[]).filter((p: any) => p.subject === s);
    const done = items.filter((p: any) => p.completed).length;
    return { subject: s, total: items.length, done, pct: items.length ? Math.round((done / items.length) * 100) : 0 };
  });

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "overview",    label: "Overview",         icon: BarChart2 },
    { id: "progress",    label: "Progress",         icon: TrendingUp },
    { id: "saved",       label: "Saved",            icon: Bookmark },
    { id: "plan",        label: "Study Plan",       icon: CalendarDays },
    { id: "reflect",     label: "Reflections",      icon: Brain },
    { id: "mistakes",    label: "Mistake Tracker",  icon: AlertTriangle },
    { id: "confidence",  label: "Confidence",       icon: Star },
    { id: "badges",      label: "Badges",           icon: Award },
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-800 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-teal-300 text-sm font-medium mb-1">Your Learning Dashboard</p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold">Welcome back, {firstName} 👋</h1>
              <p className="text-teal-200 text-sm mt-2">{user?.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right text-sm">
                <p className="text-teal-200">{completedCount} completed</p>
                <p className="text-teal-300 text-xs">{(saved as any[]).length} saved • {(badges as any[]).length} badges</p>
              </div>
              <button onClick={logout}
                className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                <LogOut className="w-3.5 h-3.5" /> Sign out
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="border-b bg-background sticky top-0 z-10 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 min-w-max">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  tab === t.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}>
                <t.icon className="w-4 h-4" />{t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            {tab === "overview"   && <OverviewTab progress={progress} saved={saved} reflections={reflections} mistakes={mistakes} badges={badges} subjectProgress={subjectProgress} setTab={setTab} />}
            {tab === "progress"   && <ProgressTab progress={progress} subjectProgress={subjectProgress} qc={qc} />}
            {tab === "saved"      && <SavedTab saved={saved} qc={qc} />}
            {tab === "plan"       && <StudyPlanTab studyPlans={studyPlans} qc={qc} earnedBadgeIds={earnedBadgeIds} />}
            {tab === "reflect"    && <ReflectTab reflections={reflections} qc={qc} earnedBadgeIds={earnedBadgeIds} />}
            {tab === "mistakes"   && <MistakesTab mistakes={mistakes} qc={qc} earnedBadgeIds={earnedBadgeIds} />}
            {tab === "confidence" && <ConfidenceTab confidence={confidence} qc={qc} />}
            {tab === "badges"     && <BadgesTab badges={badges} earnedBadgeIds={earnedBadgeIds} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}

// ── Overview Tab ─────────────────────────────────────────────────────
function OverviewTab({ progress, saved, reflections, mistakes, badges, subjectProgress, setTab }: any) {
  const cards = [
    { icon: TrendingUp, color: "bg-teal-50 border-teal-200", iconColor: "text-teal-600", label: "Completed", value: progress.filter((p: any) => p.completed).length, sub: "resources", tab: "progress" },
    { icon: Bookmark,   color: "bg-amber-50 border-amber-200", iconColor: "text-amber-600", label: "Saved",     value: saved.length,       sub: "resources", tab: "saved" },
    { icon: Brain,      color: "bg-violet-50 border-violet-200", iconColor: "text-violet-600", label: "Reflections", value: reflections.length, sub: "written", tab: "reflect" },
    { icon: AlertTriangle, color: "bg-rose-50 border-rose-200", iconColor: "text-rose-600", label: "Mistakes",  value: mistakes.filter((m: any) => m.needsReview).length, sub: "to review", tab: "mistakes" },
    { icon: Award,      color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600", label: "Badges",    value: badges.length,        sub: "earned", tab: "badges" },
  ];

  return (
    <div className="space-y-8">
      <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cards.map(c => (
          <motion.button key={c.label} variants={fadeUp} onClick={() => setTab(c.tab)}
            className={`text-left border-2 rounded-2xl p-4 hover:shadow-md transition-all ${c.color}`}>
            <c.icon className={`w-5 h-5 mb-3 ${c.iconColor}`} />
            <p className={`text-2xl font-bold ${c.iconColor}`}>{c.value}</p>
            <p className="text-xs font-medium text-foreground">{c.label}</p>
            <p className="text-xs text-muted-foreground">{c.sub}</p>
          </motion.button>
        ))}
      </motion.div>

      {/* Subject progress overview */}
      <div>
        <h2 className="font-serif font-bold text-xl text-foreground mb-4">Subject Progress</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subjectProgress.map((s: any) => (
            <div key={s.subject} className="border rounded-xl bg-background p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-sm text-foreground">{s.subject}</p>
                <span className="text-xs font-bold text-primary">{s.pct}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${s.pct}%` }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{s.done} of {s.total} items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Link href="/resources" className="border-2 border-dashed border-primary/30 rounded-2xl p-5 flex items-center gap-4 hover:border-primary hover:bg-primary/5 transition-all group">
          <BookOpen className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
          <div><p className="font-bold text-foreground">Browse Resources</p><p className="text-sm text-muted-foreground">Continue learning</p></div>
          <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
        </Link>
        <Link href="/services" className="border-2 border-dashed border-teal-300 rounded-2xl p-5 flex items-center gap-4 hover:border-teal-500 hover:bg-teal-50 transition-all group">
          <User className="w-8 h-8 text-teal-500/60 group-hover:text-teal-600 transition-colors" />
          <div><p className="font-bold text-foreground">Work With Hannah</p><p className="text-sm text-muted-foreground">Tutoring & coaching</p></div>
          <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
        </Link>
      </div>
    </div>
  );
}

// ── Progress Tab ─────────────────────────────────────────────────────
function ProgressTab({ progress, subjectProgress, qc }: any) {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [topic, setTopic] = useState("");
  const [href, setHref] = useState("");

  const addMut = useMutation({
    mutationFn: () => api.addProgress({ subject, topic, resourceHref: href || undefined, completed: false }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["progress"] }); setTopic(""); setHref(""); },
  });
  const toggleMut = useMutation({
    mutationFn: ({ id, completed }: any) => api.updateProgress(id, { completed: !completed }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["progress"] }),
  });
  const deleteMut = useMutation({
    mutationFn: (id: number) => api.deleteProgress(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["progress"] }),
  });

  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {subjectProgress.map((s: any) => (
          <div key={s.subject} className="border rounded-xl bg-background p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-sm text-foreground">{s.subject}</p>
              <span className="text-sm font-bold text-primary">{s.pct}%</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden mb-2">
              <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${s.pct}%` }} />
            </div>
            <p className="text-xs text-muted-foreground">{s.done}/{s.total} completed</p>
          </div>
        ))}
      </div>

      {/* Add item */}
      <div className="border rounded-2xl bg-background p-5">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Plus className="w-4 h-4" /> Track a Resource</h3>
        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <select value={subject} onChange={e => setSubject(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
            {SUBJECTS.map(s => <option key={s}>{s}</option>)}
          </select>
          <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic or lesson name"
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          <input value={href} onChange={e => setHref(e.target.value)} placeholder="URL (optional)"
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <button disabled={!topic || addMut.isPending} onClick={() => addMut.mutate()}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-primary/90 transition-colors">
          {addMut.isPending ? "Adding…" : "Add to Tracker"}
        </button>
      </div>

      {/* List */}
      <div className="space-y-2">
        {(progress as any[]).length === 0 && <p className="text-muted-foreground text-sm">No items tracked yet. Add your first resource above.</p>}
        {(progress as any[]).map((p: any) => (
          <div key={p.id} className={`flex items-center gap-3 border rounded-xl p-3 transition-all ${p.completed ? "bg-teal-50 border-teal-200" : "bg-background"}`}>
            <button onClick={() => toggleMut.mutate({ id: p.id, completed: p.completed })} className="shrink-0">
              {p.completed
                ? <CheckCircle className="w-5 h-5 text-teal-600" />
                : <div className="w-5 h-5 border-2 border-muted-foreground rounded-full hover:border-primary transition-colors" />}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${p.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>{p.topic}</p>
              <p className="text-xs text-muted-foreground">{p.subject}{p.resourceHref && <> · <a href={p.resourceHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View</a></>}</p>
            </div>
            <button onClick={() => deleteMut.mutate(p.id)} className="text-muted-foreground hover:text-rose-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Saved Tab ─────────────────────────────────────────────────────────
function SavedTab({ saved, qc }: any) {
  const TAGS = ["Saved for Later", "Difficult Questions", "Review Before Test", "Favourites"];
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [tag, setTag] = useState(TAGS[0]);

  const saveMut = useMutation({
    mutationFn: () => api.saveResource({ title, href, subject, tag }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["saved"] }); setTitle(""); setHref(""); },
  });
  const deleteMut = useMutation({
    mutationFn: (id: number) => api.unsaveResource(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["saved"] }),
  });

  const grouped = TAGS.map(t => ({ tag: t, items: (saved as any[]).filter((s: any) => s.tag === t) })).filter(g => g.items.length > 0);

  return (
    <div className="space-y-6">
      <div className="border rounded-2xl bg-background p-5">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Bookmark className="w-4 h-4" /> Bookmark a Resource</h3>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Resource title"
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          <input value={href} onChange={e => setHref(e.target.value)} placeholder="URL"
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          <select value={subject} onChange={e => setSubject(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
            {SUBJECTS.map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={tag} onChange={e => setTag(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
            {TAGS.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <button disabled={!title || saveMut.isPending} onClick={() => saveMut.mutate()}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-primary/90 transition-colors">
          {saveMut.isPending ? "Saving…" : "Save Resource"}
        </button>
      </div>

      {(saved as any[]).length === 0 && <p className="text-muted-foreground text-sm">No saved resources yet. Bookmark a resource above.</p>}
      {grouped.map(g => (
        <div key={g.tag}>
          <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">{g.tag}</h3>
          <div className="space-y-2">
            {g.items.map((s: any) => (
              <div key={s.id} className="flex items-center gap-3 border rounded-xl p-3 bg-background">
                <Bookmark className="w-4 h-4 text-amber-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.subject}{s.href && <> · <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Open</a></>}</p>
                </div>
                <button onClick={() => deleteMut.mutate(s.id)} className="text-muted-foreground hover:text-rose-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Study Plan Tab ─────────────────────────────────────────────────────
function generatePlan(grade: string, subject: string, topic: string, confidence: string, testDate: string) {
  const days = testDate ? Math.max(1, Math.ceil((new Date(testDate).getTime() - Date.now()) / 86400000)) : 7;
  const reviewFirst = confidence === "low"
    ? ["Start from the basics — re-read all notes and textbook sections on this topic", "Make 15–20 flashcards covering key terms and definitions", "Watch a YouTube explanation before attempting any problems"]
    : confidence === "medium"
    ? ["Review your notes and identify 2–3 specific gaps", "Redo any questions you previously got wrong", "Make targeted flashcards for concepts still unclear"]
    : ["Do a timed practice test under exam conditions", "Review only the areas where you lost marks", "Focus on tricky edge cases and higher-order thinking questions"];

  const practice = [
    `Complete 10–15 ${subject} practice questions on "${topic}"`,
    "Use active recall — close your notes and write what you remember",
    `Check the Project Nimdeɛ ${subject} resources for additional practice`,
    confidence === "low" ? "Give yourself 45-minute focused study blocks with 10-minute breaks" : "Time yourself: aim to answer each question in under 3 minutes",
  ];

  const reflection = confidence === "low"
    ? "What is one specific thing about this topic that still confuses me? Write it down and find the answer before the test."
    : confidence === "medium"
    ? "Which part of this topic costs me the most marks? What is my plan to fix it in the next 48 hours?"
    : "Could I explain this topic clearly to a classmate who missed class? What would I say?";

  const nextStep = days <= 2
    ? "Final review only — no new material. Sleep well and eat breakfast."
    : days <= 5
    ? "Do one full timed practice session and review all your flashcard decks."
    : "Build a daily study schedule: 30–45 min per day on this topic, starting today.";

  return JSON.stringify({ grade, subject, topic, confidence, testDate, days, reviewFirst, practice, reflection, nextStep });
}

function StudyPlanTab({ studyPlans, qc, earnedBadgeIds }: any) {
  const [grade, setGrade] = useState(GRADES[2]);
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [topic, setTopic] = useState("");
  const [confidence, setConfidence] = useState<typeof CONFIDENCE_LEVELS[number]>("medium");
  const [testDate, setTestDate] = useState("");
  const [activePlan, setActivePlan] = useState<any | null>(null);

  const createMut = useMutation({
    mutationFn: () => {
      const plan = generatePlan(grade, subject, topic, confidence, testDate);
      return api.createStudyPlan({ grade, subject, topic, confidence, testDate, plan });
    },
    onSuccess: async (data: any) => {
      qc.invalidateQueries({ queryKey: ["study-plans"] });
      const parsed = JSON.parse(data.plan);
      setActivePlan(parsed);
      if (!earnedBadgeIds.has("study_plan")) {
        await api.awardBadge("study_plan");
        qc.invalidateQueries({ queryKey: ["badges"] });
      }
    },
  });

  const deleteMut = useMutation({
    mutationFn: (id: number) => api.deleteStudyPlan(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["study-plans"] }),
  });

  return (
    <div className="space-y-6">
      <div className="border rounded-2xl bg-background p-6">
        <h3 className="font-serif font-bold text-xl text-foreground mb-5">Generate a Study Plan</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1.5">Grade</label>
            <select value={grade} onChange={e => setGrade(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
              {GRADES.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1.5">Subject</label>
            <select value={subject} onChange={e => setSubject(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1.5">Topic</label>
            <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Cell Division, Quadratics"
              className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <div>
            <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1.5">Confidence Level</label>
            <div className="flex gap-2">
              {CONFIDENCE_LEVELS.map(c => (
                <button key={c} onClick={() => setConfidence(c)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold capitalize border-2 transition-colors ${
                    confidence === c ? "border-primary bg-primary text-white" : "border-border hover:border-primary/40"
                  }`}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1.5">Test Date (optional)</label>
            <input type="date" value={testDate} onChange={e => setTestDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
        </div>
        <button disabled={!topic || createMut.isPending} onClick={() => createMut.mutate()}
          className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-primary/90 transition-colors">
          {createMut.isPending ? "Generating…" : "Generate Plan"}
        </button>
      </div>

      {activePlan && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-teal-300 bg-teal-50 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="font-serif font-bold text-xl text-teal-900">{activePlan.subject} — {activePlan.topic}</h3>
            <span className="text-xs font-bold bg-teal-700 text-white px-3 py-1 rounded-full capitalize">{activePlan.confidence} confidence</span>
          </div>
          {activePlan.testDate && (
            <p className="text-sm text-teal-700 flex items-center gap-2"><CalendarDays className="w-4 h-4" />Test in <strong>{activePlan.days} days</strong></p>
          )}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">Review First</p>
              <ul className="space-y-1.5">{activePlan.reviewFirst.map((r: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-teal-800"><span className="shrink-0 mt-0.5">→</span>{r}</li>
              ))}</ul>
            </div>
            <div>
              <p className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">Practice</p>
              <ul className="space-y-1.5">{activePlan.practice.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-teal-800"><span className="shrink-0 mt-0.5">→</span>{p}</li>
              ))}</ul>
            </div>
          </div>
          <div className="bg-white border border-teal-200 rounded-xl p-4">
            <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">Reflection Question</p>
            <p className="text-sm text-teal-900 italic">"{activePlan.reflection}"</p>
          </div>
          <div className="bg-teal-700 text-white rounded-xl p-4">
            <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-1">Next Step</p>
            <p className="text-sm">{activePlan.nextStep}</p>
          </div>
        </motion.div>
      )}

      {(studyPlans as any[]).length > 0 && (
        <div>
          <h3 className="font-bold text-foreground mb-3">Previous Plans</h3>
          <div className="space-y-2">
            {(studyPlans as any[]).map((p: any) => {
              const parsed = JSON.parse(p.plan);
              return (
                <div key={p.id} className="flex items-center gap-3 border rounded-xl p-3 bg-background">
                  <CalendarDays className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{parsed.subject} — {parsed.topic}</p>
                    <p className="text-xs text-muted-foreground">{parsed.grade} · {parsed.confidence} confidence</p>
                  </div>
                  <button onClick={() => setActivePlan(parsed)} className="text-xs text-primary hover:underline">View</button>
                  <button onClick={() => deleteMut.mutate(p.id)} className="text-muted-foreground hover:text-rose-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Reflect Tab ────────────────────────────────────────────────────────
function ReflectTab({ reflections, qc, earnedBadgeIds }: any) {
  const [form, setForm] = useState({ learnedToday: "", stillConfusing: "", strategyHelped: "", reviewNext: "" });

  const addMut = useMutation({
    mutationFn: () => api.addReflection(form),
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ["reflections"] });
      setForm({ learnedToday: "", stillConfusing: "", strategyHelped: "", reviewNext: "" });
      if (!earnedBadgeIds.has("first_reflection")) {
        await api.awardBadge("first_reflection");
        qc.invalidateQueries({ queryKey: ["badges"] });
      }
    },
  });
  const deleteMut = useMutation({
    mutationFn: (id: number) => api.deleteReflection(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reflections"] }),
  });

  const prompts = [
    { key: "learnedToday", label: "What did I learn today?", required: true, placeholder: "Describe what you studied and what clicked..." },
    { key: "stillConfusing", label: "What still feels confusing?", required: false, placeholder: "Be specific — name the concept or question..." },
    { key: "strategyHelped", label: "What strategy helped me?", required: false, placeholder: "e.g. flashcards, teaching it out loud, diagrams..." },
    { key: "reviewNext", label: "What do I want to review next?", required: false, placeholder: "What's your next priority?" },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
        <p className="text-sm text-violet-800 leading-relaxed">
          <span className="font-bold">Why reflect?</span> Writing about what you learned strengthens memory and helps you identify real gaps — things you <em>think</em> you understand but don't. Most students skip this. Don't be most students.
        </p>
      </div>

      <div className="border rounded-2xl bg-background p-6 space-y-4">
        <h3 className="font-serif font-bold text-xl text-foreground">New Reflection</h3>
        {prompts.map(p => (
          <div key={p.key}>
            <label className="text-sm font-bold text-foreground block mb-1.5">
              {p.label} {p.required && <span className="text-rose-500">*</span>}
            </label>
            <textarea value={form[p.key]} onChange={e => setForm(f => ({ ...f, [p.key]: e.target.value }))}
              placeholder={p.placeholder} rows={2}
              className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
        ))}
        <button disabled={!form.learnedToday || addMut.isPending} onClick={() => addMut.mutate()}
          className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-primary/90 transition-colors">
          {addMut.isPending ? "Saving…" : "Save Reflection"}
        </button>
      </div>

      <div className="space-y-4">
        {(reflections as any[]).length === 0 && <p className="text-muted-foreground text-sm">No reflections yet. Write your first one above.</p>}
        {(reflections as any[]).map((r: any) => (
          <div key={r.id} className="border rounded-2xl bg-background p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" })}</p>
              <button onClick={() => deleteMut.mutate(r.id)} className="text-muted-foreground hover:text-rose-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-bold text-foreground">Learned: </span><span className="text-foreground">{r.learnedToday}</span></p>
              {r.stillConfusing && <p className="text-sm"><span className="font-bold text-amber-700">Still confusing: </span><span className="text-muted-foreground">{r.stillConfusing}</span></p>}
              {r.strategyHelped && <p className="text-sm"><span className="font-bold text-teal-700">Strategy: </span><span className="text-muted-foreground">{r.strategyHelped}</span></p>}
              {r.reviewNext && <p className="text-sm"><span className="font-bold text-violet-700">Review next: </span><span className="text-muted-foreground">{r.reviewNext}</span></p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Mistakes Tab ───────────────────────────────────────────────────────
function MistakesTab({ mistakes, qc, earnedBadgeIds }: any) {
  const [form, setForm] = useState({ subject: SUBJECTS[0], topic: "", mistake: "", correctStrategy: "", needsReview: true });

  const addMut = useMutation({
    mutationFn: () => api.addMistake(form),
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ["mistakes"] });
      setForm(f => ({ ...f, topic: "", mistake: "", correctStrategy: "" }));
      if (!earnedBadgeIds.has("first_mistake")) {
        await api.awardBadge("first_mistake");
        qc.invalidateQueries({ queryKey: ["badges"] });
      }
    },
  });
  const toggleMut = useMutation({
    mutationFn: ({ id, needs }: any) => api.updateMistake(id, { needsReview: !needs }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mistakes"] }),
  });
  const deleteMut = useMutation({
    mutationFn: (id: number) => api.deleteMistake(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mistakes"] }),
  });

  const needsReview = (mistakes as any[]).filter((m: any) => m.needsReview);
  const resolved = (mistakes as any[]).filter((m: any) => !m.needsReview);

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <p className="text-sm text-amber-800">
          <span className="font-bold">The Mistake Tracker is one of the most powerful tools here.</span> Research shows that analysing your own errors — understanding why you were wrong and what the correct strategy is — leads to dramatically better retention than just redoing problems you already know.
        </p>
      </div>

      <div className="border rounded-2xl bg-background p-6 space-y-4">
        <h3 className="font-serif font-bold text-xl text-foreground">Log a Mistake</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1.5">Subject</label>
            <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1.5">Topic <span className="text-rose-500">*</span></label>
            <input value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))} placeholder="e.g. Photosynthesis, Quadratic Formula"
              className="w-full border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1.5">What mistake did I make? <span className="text-rose-500">*</span></label>
            <textarea value={form.mistake} onChange={e => setForm(f => ({ ...f, mistake: e.target.value }))} rows={2} placeholder="Describe the error specifically..."
              className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1.5">Correct strategy <span className="text-rose-500">*</span></label>
            <textarea value={form.correctStrategy} onChange={e => setForm(f => ({ ...f, correctStrategy: e.target.value }))} rows={2} placeholder="What should I do instead?"
              className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
        </div>
        <button disabled={!form.topic || !form.mistake || !form.correctStrategy || addMut.isPending} onClick={() => addMut.mutate()}
          className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-primary/90 transition-colors">
          {addMut.isPending ? "Saving…" : "Log Mistake"}
        </button>
      </div>

      {needsReview.length > 0 && (
        <div>
          <h3 className="font-bold text-rose-700 mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Needs Review ({needsReview.length})</h3>
          <div className="space-y-3">
            {needsReview.map((m: any) => (
              <div key={m.id} className="border-2 border-rose-200 bg-rose-50 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div><p className="font-bold text-sm text-rose-900">{m.topic}</p><p className="text-xs text-rose-700">{m.subject}</p></div>
                  <div className="flex gap-2">
                    <button onClick={() => toggleMut.mutate({ id: m.id, needs: m.needsReview })} className="text-xs font-bold text-teal-700 hover:underline">Mark resolved</button>
                    <button onClick={() => deleteMut.mutate(m.id)} className="text-rose-400 hover:text-rose-600"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <p className="text-sm text-rose-800 mb-2"><span className="font-bold">Mistake: </span>{m.mistake}</p>
                <p className="text-sm text-teal-800 bg-teal-50 rounded-lg p-2"><span className="font-bold">Correct strategy: </span>{m.correctStrategy}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {resolved.length > 0 && (
        <div>
          <h3 className="font-bold text-teal-700 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Resolved ({resolved.length})</h3>
          <div className="space-y-2">
            {resolved.map((m: any) => (
              <div key={m.id} className="border border-teal-200 bg-teal-50 rounded-xl p-3 flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal-900">{m.topic}</p>
                  <p className="text-xs text-teal-700">{m.subject}</p>
                </div>
                <button onClick={() => toggleMut.mutate({ id: m.id, needs: m.needsReview })} className="text-xs text-muted-foreground hover:underline">Re-open</button>
                <button onClick={() => deleteMut.mutate(m.id)} className="text-muted-foreground hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      )}

      {(mistakes as any[]).length === 0 && <p className="text-muted-foreground text-sm">No mistakes logged yet. Next time you get something wrong, record it here.</p>}
    </div>
  );
}

// ── Confidence Tab ────────────────────────────────────────────────────
function ConfidenceTab({ confidence, qc }: any) {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [topic, setTopic] = useState("");
  const [rating, setRating] = useState(3);

  const addMut = useMutation({
    mutationFn: () => api.addConfidence({ subject, topic, rating }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["confidence"] }); setTopic(""); setRating(3); },
  });

  const grouped = SUBJECTS.map(s => {
    const items = (confidence as any[]).filter((c: any) => c.subject === s);
    const avg = items.length ? Math.round((items.reduce((a: number, c: any) => a + c.rating, 0) / items.length) * 10) / 10 : null;
    return { subject: s, items, avg };
  }).filter(g => g.items.length > 0);

  const RATING_LABELS = ["", "Not at all confident", "Slightly confident", "Moderately confident", "Quite confident", "Very confident"];
  const RATING_COLORS = ["", "text-rose-600", "text-orange-500", "text-amber-500", "text-teal-500", "text-green-600"];

  return (
    <div className="space-y-6">
      <div className="border rounded-2xl bg-background p-6">
        <h3 className="font-serif font-bold text-xl text-foreground mb-5">Rate Your Confidence</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <select value={subject} onChange={e => setSubject(e.target.value)}
            className="border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
            {SUBJECTS.map(s => <option key={s}>{s}</option>)}
          </select>
          <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Specific topic"
            className="border rounded-lg px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold text-foreground mb-2">Confidence: <span className={`${RATING_COLORS[rating]}`}>{RATING_LABELS[rating]}</span></p>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setRating(n)}
                className={`flex-1 py-3 rounded-xl text-lg font-bold border-2 transition-all ${
                  n <= rating ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"
                }`}>{n}</button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
            <span>Not at all</span><span>Very confident</span>
          </div>
        </div>
        <button disabled={!topic || addMut.isPending} onClick={() => addMut.mutate()}
          className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-primary/90 transition-colors">
          {addMut.isPending ? "Saving…" : "Save Rating"}
        </button>
      </div>

      {grouped.length === 0 && <p className="text-muted-foreground text-sm">No confidence ratings yet. Rate your confidence in specific topics above.</p>}
      {grouped.map(g => (
        <div key={g.subject}>
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-bold text-foreground">{g.subject}</h3>
            {g.avg !== null && <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Avg: {g.avg}/5</span>}
          </div>
          <div className="space-y-2">
            {g.items.map((c: any) => (
              <div key={c.id} className="flex items-center gap-3 border rounded-xl p-3 bg-background">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(n => (
                    <Star key={n} className={`w-3.5 h-3.5 ${n <= c.rating ? "text-amber-400 fill-amber-400" : "text-muted"}`} />
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{c.topic}</p>
                  <p className="text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`text-xs font-bold ${RATING_COLORS[c.rating]}`}>{c.rating}/5</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Badges Tab ────────────────────────────────────────────────────────
function BadgesTab({ earnedBadgeIds }: any) {
  return (
    <div>
      <p className="text-muted-foreground text-sm mb-6">Badges are earned automatically as you use your dashboard. They track real learning actions — not just logins.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {BADGE_DEFS.map(b => {
          const earned = earnedBadgeIds.has(b.id);
          return (
            <div key={b.id} className={`border-2 rounded-2xl p-5 text-center transition-all ${earned ? "border-amber-300 bg-amber-50" : "border-border bg-muted/30 opacity-60"}`}>
              <p className="text-3xl mb-2">{b.icon}</p>
              <p className={`font-bold text-sm mb-1 ${earned ? "text-amber-900" : "text-muted-foreground"}`}>{b.label}</p>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
              {earned && <p className="text-xs font-bold text-amber-600 mt-2">Earned ✓</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

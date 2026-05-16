// @refresh reset
import React, { createContext, useContext, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export interface AuthUser {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
}

function toAuthUser(supabaseUser: User | null): AuthUser | null {
  if (!supabaseUser) return null;
  const meta = supabaseUser.user_metadata ?? {};
  const fullName: string = meta.full_name ?? meta.name ?? "";
  const nameParts = fullName.split(" ").filter(Boolean);
  return {
    id: supabaseUser.id,
    email: supabaseUser.email ?? null,
    firstName: meta.first_name ?? meta.given_name ?? nameParts[0] ?? null,
    lastName:
      meta.last_name ?? meta.family_name ?? (nameParts.slice(1).join(" ") || null),
    avatarUrl: meta.avatar_url ?? meta.picture ?? null,
  };
}

interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user: toAuthUser(session?.user ?? null),
        session,
        isLoading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

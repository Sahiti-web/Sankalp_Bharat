export type SessionUser = {
  id: string;
  orgId: string;
  role: string;
};

export type AppSession = {
  token: string;
  user: SessionUser;
};

const SESSION_KEY = "carbonlens_session";

export function getSession(): AppSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AppSession;
  } catch {
    return null;
  }
}

export function getToken(): string | null {
  return getSession()?.token ?? null;
}

export function getOrganizationId(): string | null {
  return getSession()?.user.orgId ?? null;
}

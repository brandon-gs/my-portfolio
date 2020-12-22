import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

interface Params {
  redirectTo?: string;
  redirectIfFound?: boolean;
}
export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
}: Params) {
  const { data: user, mutate: mutateUser } = useSWR("/api/auth/user");
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    const userNotFound = !redirectIfFound && !user?.isLoggedIn;

    if ((redirectTo && userNotFound) || (redirectIfFound && user?.isLoggedIn)) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}

type GuardResult =
    | { status: "loading" }
    | { status: "redirect"; to: string }
    | { status: "ok" };

export const useAuthGuard = (): GuardResult => {
    const isLoading = false;
    const isSignedIn = true;

    if (isLoading) return { status: "loading" };

    if (!isSignedIn) return { status: "redirect", to: "/auth/login" };

    return { status: "ok" };
};

import { useMemo } from "react";

export function useFilteredUsers(users, query) {
    const lowerQuery = query.toLowerCase();
    return useMemo(() => {
        return users?.filter((user) => {
            return user.firstName.toLowerCase().includes(lowerQuery) ||
                user.lastName.toLowerCase().includes(lowerQuery) ||
                user.ssn.toLowerCase().includes(lowerQuery);
        });
    }, [users, query]);
}

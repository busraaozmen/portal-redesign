import axios from "axios";
import {
    useQuery,
} from "@tanstack/react-query";

export function useUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://dummyjson.com/users"
            );
            return data;
        },
    });
}

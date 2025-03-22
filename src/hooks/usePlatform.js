import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";

// Custom hook to fetch platform data
const usePlatform = () => useQuery({
    queryKey:['platform'],
    queryFn:() =>apiClient.get('/platforms/lists/parents').then(res => res.data )
})

export default usePlatform;

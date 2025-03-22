import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
// Custom hook to fetch genres
const useGenres = () => useQuery({
    queryKey : ['Genres'],
    queryFn:()=>apiClient.get('/genres').then(res=>res.data)
})

export default useGenres;

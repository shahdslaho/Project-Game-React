import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
// Custom hook to fetch games using infinite query
const useGames = (selectGenre, selectPlatform, selectSortOrder, searchText) => {
  return useInfiniteQuery({
    queryKey: ["games", selectGenre?.id, selectPlatform?.id, selectSortOrder, searchText], 
    queryFn: ({ pageParam = 1 }) => 
      apiClient
        .get("/games", {
          params: {
            genres: selectGenre?.id,
            platforms: selectPlatform?.id,
            ordering: selectSortOrder,
            search: searchText,
            page: pageParam, 
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
     
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, 
  });
};

export default useGames;
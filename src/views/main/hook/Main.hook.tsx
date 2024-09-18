// Vendors
import { useState, useEffect } from "react";

// Handlers
import MainHandlers from "../handlers/Main.handlers";

// Types
import { Podcast } from "@/types/Podcast.type";

// Contexts
import { useAppContext } from "@/contexts/app.context";

const useMain = () => {
    const [search, setSearch] = useState<string>("");
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const { setAppLoading } = useAppContext();  

    const { handleSearch, handleGetPodcasts } = MainHandlers({ setPodcasts, setAppLoading, setSearch });

    useEffect(() => {
        handleGetPodcasts();
    }, []);

    return { handleSearch, podcasts, search };


}

export default useMain;
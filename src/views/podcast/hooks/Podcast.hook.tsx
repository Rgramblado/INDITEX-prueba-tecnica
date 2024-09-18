// Vendors
import { useAppContext } from "@/contexts/app.context";
import { PodcastDetails } from "@/types/PodcastDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PodcastHandlers from "../handlers/Podcast.handlers";

const usePodcast = () => {
    const { podcastId } = useParams();

    const { setAppLoading } = useAppContext();

    const [podcast, setPodcast] = useState<PodcastDetails | null>(null);

    const { handleGetPodcastDetails } = PodcastHandlers({ setAppLoading, setPodcast, podcastId: podcastId as string });

    useEffect(() => {
        handleGetPodcastDetails();
    }, []);

    return { podcast };
}

export default usePodcast;



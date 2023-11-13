import Link from "next/link";
import { useRouter } from "next/router";
import { Mixer } from "@/components/Mixer";
import { MixerMachineContext } from "@/context/MixerMachineContext";
import {
  justDance,
  roxanne,
  aDayInTheLife,
  blueMonday,
  ninteenOne,
} from "@/assets/songs";
import { useEffect, useState } from "react";
import { localStorageGet } from "@/utils";

export default function Page() {
  const { send } = MixerMachineContext.useActorRef();
  const localTracks = localStorageGet("currentTracks");
  const localSourceSong = localStorageGet("sourceSong");
  const [currentTracks, setCurrentTracks] = useState(() => localTracks);
  const [sourceSong, setSourceSong] = useState(() => localSourceSong);
  const router = useRouter();

  useEffect(() => {
    console.log("router.query.slug", router.query.slug);
    switch (router.query.slug) {
      case "roxanne":
        setSourceSong(roxanne);
        setCurrentTracks(roxanne.tracks);
        send({
          type: "LOAD_SONG",
          value: roxanne,
        });
        break;

      case "aDayInTheLife":
        setSourceSong(aDayInTheLife);
        setCurrentTracks(aDayInTheLife.tracks);
        send({
          type: "LOAD_SONG",
          value: aDayInTheLife,
        });
        break;

      case "blueMonday":
        setSourceSong(blueMonday);
        setCurrentTracks(blueMonday.tracks);
        send({
          type: "LOAD_SONG",
          value: blueMonday,
        });
        break;

      case "ninteenOne":
        setSourceSong(ninteenOne);
        setCurrentTracks(ninteenOne.tracks);
        send({
          type: "LOAD_SONG",
          value: ninteenOne,
        });
        break;

      case "justDance":
        setSourceSong(justDance);
        setCurrentTracks(justDance.tracks);
        send({
          type: "LOAD_SONG",
          value: justDance,
        });
        break;
      default:
        break;
    }
  }, [send, router.query.slug]);

  return (
    <div>
      <h1>page: {router.query.slug}</h1>
      <Link href="/">home</Link> <Link href="/two">two</Link>
      <Mixer sourceSong={sourceSong} currentTracks={currentTracks} />
    </div>
  );
}

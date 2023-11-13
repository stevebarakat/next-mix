import { Mixer } from "@/components/Mixer";
import { useRouter } from "next/router";
import { MixerMachineContext } from "@/context/MixerMachineContext";
import { localStorageGet } from "@/utils";
import { PrismaClient } from "@prisma/client";
// import SongSelect from "@/components/SongSelect";
import {
  justDance,
  roxanne,
  aDayInTheLife,
  blueMonday,
  ninteenOne,
} from "@/assets/songs";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const sourceSong = prisma.song;

  return {
    props: { data: "buu" },
  };
}

function App(props) {
  const router = useRouter();
  console.log("props", props);
  const { send } = MixerMachineContext.useActorRef();

  function onChange(e: React.FormEvent<HTMLSelectElement>): void {
    const selectSong = {
      ninteenOne: () => router.push("/ninteenOne"),
      roxanne: () => router.push("/roxanne"),
      aDayInTheLife: () => router.push("/aDayInTheLife"),
      blueMonday: () => router.push("/blueMonday"),
      justDance: () => router.push("/justDance"),
    };
    selectSong[e.currentTarget.value as keyof typeof selectSong]();
  }

  return (
    <select name="songs" id="song-select" onChange={onChange}>
      <option value="">Choose a song:</option>
      <option value="ninteenOne">Phoenix - 1901</option>
      <option value="roxanne">The Police - Roxanne</option>
      <option value="aDayInTheLife">The Beatles - A Day In The Life</option>
      <option value="blueMonday">New Order - Blue Monday</option>
      <option value="justDance">Lady Gaga - Just Dance</option>
    </select>
  );
}

export default App;

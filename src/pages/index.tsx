import { Mixer } from "@/components/Mixer";
import { MixerMachineContext } from "@/context/MixerMachineContext";
import { PrismaClient } from "@prisma/client";

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const prisma = new PrismaClient();
  const currentTracks = await prisma.trackSettings.findMany();
  const sourceSong = await prisma.song.findFirst({
    where: { slug: "aDayInTheLife" },
    include: { tracks: true },
  });

  return {
    props: { currentTracks, sourceSong },
  };
}

function App({ currentTracks, sourceSong }) {
  return (
    <MixerMachineContext.Provider>
      <Mixer tracks={currentTracks} sourceSong={sourceSong} />
    </MixerMachineContext.Provider>
  );
}

export default App;

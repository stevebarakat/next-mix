import { Destination, Transport as t } from "tone";
import Transport from "./Transport";
import { log, dbToPercent } from "../utils";
import useTracks from "@/hooks/useTracks";
import Loader from "./Loader";
import SongInfo from "./SongInfo";
import { TrackChannel } from "./Track";
import Main from "./Main";
import { MixerMachineContext } from "@/context/MixerMachineContext";
import { roxanne } from "@/assets/songs";
import { useEffect } from "react";

export const Mixer = ({ currentTracks, sourceSong }) => {
  const { currentMain } = MixerMachineContext.useSelector(
    (state) => state.context
  );
  const tracks = sourceSong?.tracks;
  const { channels } = useTracks({ tracks });

  useEffect(() => {
    (function loadSettings() {
      t.bpm.value = sourceSong?.bpm;
      const volume = currentMain.volume;
      const scaled = dbToPercent(log(volume));
      Destination.volume.value = scaled;

      currentTracks.forEach((currentTrack: TrackSettings, trackId: number) => {
        const value = currentTrack.volume || -32;
        const scaled = dbToPercent(log(value));

        if (channels[trackId]) {
          channels[trackId].set({ volume: -12 });
        }
      });
    })();
  });

  const isLoading = MixerMachineContext.useSelector((state) =>
    state.matches("loading")
  );

  if (isLoading) {
    return <Loader song={sourceSong} />;
  } else {
    return (
      <>
        <div className="mixer">
          <SongInfo song={sourceSong} />
          <div className="channels">
            {tracks?.map((track, i) => (
              <TrackChannel
                key={track.id}
                track={track}
                trackId={i}
                channels={channels}
                currentTracks={currentTracks}
              />
            ))}
            <Main />
          </div>
          <Transport song={sourceSong} />
        </div>
      </>
    );
  }
};

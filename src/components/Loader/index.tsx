import { MixerMachineContext } from "@/context/MixerMachineContext";
import { loaded } from "tone";
// import "./styles.css";

type Props = {
  song: SourceSong;
};

const Spinner = ({ song }: Props) => {
  const { send } = MixerMachineContext.useActorRef();

  loaded().then(() => send("LOADED"));

  return <div className="loader">Loading...</div>;
};

export default Spinner;

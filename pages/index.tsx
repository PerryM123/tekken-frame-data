import FrameDataTable from "../components/FrameDataTable";
import { IFrameData } from "../interfaces/frameData";
import styles from "../styles/index.module.css";

export default function Home() {
  const handleFrameDataSelector = () => {
    console.log("handleFrameDataSelector");
  };
  // TODO: change to JSON data soon
  const frameDataTest: IFrameData[] = [
    {
      input: "1",
      startUp: 10,
      hitType: "H",
      damage: 7,
      block: 1,
      blockSymbol: "-",
      hit: 8,
      hitSymbol: "+",
      counter: 8,
      counterSymbol: "+",
    },
    {
      input: "1,1",
      startUp: 11,
      hitType: "H",
      damage: 7,
      block: 1,
      blockSymbol: "+",
      hit: 8,
      hitSymbol: "+",
      counter: 8,
      counterSymbol: "+",
    },
    {
      input: "1,2",
      startUp: 13,
      hitType: "H",
      damage: 7,
      block: 1,
      blockSymbol: "+",
      hit: 8,
      hitSymbol: "+",
      counter: 8,
      counterSymbol: "+",
    },
    {
      input: "1,1,2",
      startUp: 10,
      hitType: "H",
      damage: 7,
      block: 1,
      blockSymbol: "+",
      hit: 8,
      hitSymbol: "+",
      counter: 8,
      counterSymbol: "+",
    },
  ];
  return (
    <div>
      <nav>
        <h3>character list</h3>
        <ul>
          <li>
            <a href="#">Heihachi</a>
          </li>
          <li>
            <a href="#">Jin</a>
          </li>
          <li>
            <a href="#">Panda</a>
          </li>
          <li>
            <a href="#">Panda</a>
          </li>
        </ul>
      </nav>
      <h1>Heihachi's Frame Data</h1>
      <ul>
        <li>
          <div onClick={handleFrameDataSelector}>Make all one list</div>
        </li>
        <li>
          <div onClick={handleFrameDataSelector}>
            Section off by move category
          </div>
        </li>
      </ul>
      <FrameDataTable title="Standing" frameData={frameDataTest} />
      <div className={styles.frameDataArea}>
        <h2>Advancing</h2>
      </div>
      <div className={styles.frameDataArea}>
        <h2>Dashing</h2>
      </div>
      <div className={styles.frameDataArea}>
        <h2>Poking</h2>
      </div>
      <div className={styles.frameDataArea}>
        <h2>Standing to Crouch</h2>
      </div>
      <div className={styles.frameDataArea}>
        <h2>While Crouching</h2>
      </div>
      <div className={styles.frameDataArea}>
        <h2>While Standing</h2>
      </div>
      <div className={styles.frameDataArea}>
        <h2>Jumping</h2>
      </div>
    </div>
  );
}

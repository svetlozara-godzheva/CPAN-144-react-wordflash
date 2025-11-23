import Link from "next/link";
import styles from "./page.module.css";
import RightWrongChart from "./components/RightWrongChart";
import StartWordflash from "./components/StartWordflash";
import Statistics from "./components/Statistics";
import LastWrongAnswers from "./components/LastWrongAnswers";

export default function Home() {
  return (
    <div>
      <div className="container mb-5 mt-5 px-4">
        <StartWordflash />
      </div>

      <div className="container px-4">
        <div className="row">
          <RightWrongChart />
          <Statistics />
          <LastWrongAnswers />
        </div>
      </div>

    </div>
  );
}

import Link from "next/link";
import styles from "./page.module.css";
import RightWrongChart from "./components/RightWrongChart";

export default function Home() {
  return (
    <div>
      <div className="container mb-5 mt-5 px-4">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 text-center">
            <Link href="/wordflash" className="btn btn-primary btn-lg btn-xlg">
              Start WordFlash
            </Link>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>

      <div className="container px-4">
        <div className="row">
          <div className="col-lg-4 text-center mb-5 ">
            <h5 className="mb-4">Right/Wrong Pie Chart</h5>
            <div className="px-5 pie-chart">
              <RightWrongChart />
            </div>

          </div>
          <div className="col-lg-4 text-center mb-5">
            <h5 className="mb-4">Statistics</h5>
            <ul className="list-group" id="statistics">
              <li className="list-group-item">Average Quiz Time: 53 sec</li>
              <li className="list-group-item">Total Wrong Answers: 4</li>
              <li className="list-group-item">Total Right Answers: 6</li>
            </ul>
          </div>
          <div className="col-lg-4 text-center mb-5">
            <h5 className="mb-4">Last Wrong Answers</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Word</th>
                  <th scope="col">Meaning</th>
                </tr>
              </thead>
              <tbody id="wrong-answers-body">
                <tr><td>hej</td><td>hello</td></tr>
                <tr><td>vän</td><td>friend</td></tr>
                <tr><td>tack</td><td>thank you</td></tr>
                <tr><td>familj</td><td>family</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

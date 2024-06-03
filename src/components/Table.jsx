import "../Styles/Table.css";
import lidarImage from "../assets/noun-lidar-3123571-black.png";
import cameraLensImage from "../assets/noun-camera-lens-1636178-black.png";
import batteryImage from "../assets/battery_spectov-black.png";
import coralChipImage from "../assets/CORAL-removebg-preview-black.png";
import typeCImage from "../assets/noun-type-c-5803437-black.png";

function Table() {
  return (
    <div className="center-container">
      <h1 className="spf">Special Features</h1>
      <table className="special-features">
        <tbody>
          <tr>
            <td>
              <img src={lidarImage} alt="Lidar Symbol" className="lidar" />
              <br />
              <p className="description d5">LiDAR sensor</p>
            </td>
            <td>
              <img src={cameraLensImage} alt="Lens Symbol" className="lens" />
              <br />
              <p className="description d6">
                Lens built by
                <br /> <b>SONY</b>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={batteryImage}
                alt="Battery Symbol"
                className="battery"
              />
              <br />
              <p className="description d1">
                Long Lasting Battery <br />
                <b>Upto 36Hrs</b>
              </p>
            </td>
            <td>
              <img src={cameraLensImage} alt="Lens Symbol" className="lens" />
              <br />
              <p className="description d2">
                Lens built by
                <br /> <b>SONY</b>
              </p>
            </td>
          </tr>
          <tr className="loww">
            <td>
              <img src={coralChipImage} alt="Chip Symbol" className="chip" />
              <br />
              <p className="description d3">
                Heavy processor with
                <br /> <b>CORAL chip</b>
              </p>
            </td>
            <td>
              <img src={typeCImage} alt="Port Symbol" className="port" />
              <br />
              <p className="description d4">
                C-Type port
                <br />
                <b>For 5X faster Charging</b>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

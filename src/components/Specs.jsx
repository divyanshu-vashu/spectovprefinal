import "../Styles/Specs.css";
function Specs() {
  return (
    <>
      <div className="specs-container">
        <h1 className="specs-heading">Specs</h1>
        <table className="specs-table">
          <tbody>
            <tr className="even">
              <th>Size</th>
              <td>
                <ul>
                  <li>Length: 148.5 mm (5.83 inches)</li>
                  <li>Width: 60 mm (2.36 inches)</li>
                  <li>Height: 52 mm (2.05 inches)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>79g</td>
            </tr>
            <tr className="even">
              <th>Display</th>
              <td>
                <ul>
                  <li>46 Degree FOV</li>
                  <li>Micro OLED panel from SONY</li>
                  <li>Resolution: 1920*1080 pixels per eye</li>
                  <li>
                    Refresh rate: Up to 120Hz (2D mode 120 Hz, 3D mode 90Hz)*
                  </li>
                  <li>Brightness: Up to 400 nits</li>
                  <li>
                    *3D refers to the 3840*1080 stereoscopic mode, while 2D
                    refers to the 1920*1080 monoscopic mode.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Audio</th>
              <td>
                <ul>
                  <li>2 Built-in stereo speakers</li>
                  <li>2 microphones</li>
                </ul>
              </td>
            </tr>
            <tr className="even">
              <th>Ergonomic Design</th>
              <td>
                <ul>
                  <li>Nose pad (S/M/L)</li>
                  <li>3-position temple adjustment</li>
                  <li>Detachable prescription lens frame</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Connector</th>
              <td>USB-C DisplayPort</td>
            </tr>
            <tr className="even">
              <th>Compatibility</th>
              <td>
                <ul>
                  <li>Screen Mirroring:</li>
                  <li>USB-C Video Output, HDMI Output devices</li>
                  <li>
                    iPhone*, Android, MacBook, Steam Deck, ROG Ally, Windows PC
                    and more.
                  </li>
                  <li>3DoF: spectov Beam</li>
                  <li>
                    *For models with Lightning connectivity, the use of an spectov
                    Adapter or Beam is necessary.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Buttons</th>
              <td>
                <ul>
                  <li>Screen on/off button</li>
                  <li>Screen brightness adjustment button</li>
                </ul>
              </td>
            </tr>
            <tr className="even">
              <th>TUV Certification</th>
              <td>TÜV Rheinland-certified eye comfort.</td>
            </tr>
            <tr>
              <th>Warranty Type</th>
              <td>1 year</td>
            </tr>
            <tr className="even">
              <th>In the box</th>
              <td>
                <ul>
                  <li>Air Glasses</li>
                  <li>USB-C detachable cable</li>
                  <li>Nose pad (S/M/L)</li>
                  <li>Cleaning cloth</li>
                  <li>Protective case</li>
                  <li>User manual</li>
                  <li>* spectov Adapter or HDMI-C cable is not included.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Specs;

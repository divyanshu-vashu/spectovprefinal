import "../Styles/Table.css"
function Table()
{
    return(
        <>
        <h1 className="spf">Special Features</h1>
        <table className="special-features">
            <tr>
                <td>
                    <img src="../assets/noun-lidar-3123571-black.png" alt="Lidar Symbol" className='lidar'/><br />
                    <p className="description d5">LiDAR sensor</p>
                    {/* <i className="fa fa-solid fa-battery-full battery"></i> */}
                </td>
                <td>
                    <img src="../assets/noun-camera-lens-1636178-black.png" alt="Lens Symbol" className='lens'/><br />
                    <p className="description d6">Lens built by<br /> <b>SONY</b></p>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="../assets/battery_spectov-black.png" alt="Battery Symbol" className='battery'/><br />
                    <p className="description d1">Long Lasting Battery <br /><b>Upto 36Hrs</b></p>
                    {/* <i className="fa fa-solid fa-battery-full battery"></i> */}
                </td>
                <td>
                    <img src="../assets/noun-camera-lens-1636178-black.png" alt="Lens Symbol" className='lens'/><br />
                    <p className="description d2">Lens built by<br /> <b>SONY</b></p>
                </td>
            </tr>
            <tr className='loww'>
                <td>
                    <img src="src\assets\CORAL-removebg-preview-black.png" alt="Chip Symbol" className='chip'/><br />
                    <p className="description d3">Heavy processor with<br /> <b>CORAL chip</b></p>
                </td>
                <td>
                    <img src="src\assets\noun-type-c-5803437-black.png" alt="Port Symbol" className='port'/><br />
                    <p className="description d4">C-Type port<br /><b>For 5X faster Charging</b></p>
                </td>
            </tr>
        </table>
        </>
    );
}

export default Table

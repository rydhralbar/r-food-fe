import React from "react";

const Maintenance = (props) => {
  React.useEffect(() => {
    setInterval(() => {
      if(props.maintenanceList.find((res) => res === window.location.pathname)) {
        props.turnOnMaintenance();
      } else {
        props.turnOffMaintenance();
      }
    }, 1500);
  }, [])

  return (
    <div>
      <img src={require("../images/maintenance-logo.webp")} alt="Maintenance" style={{width: "100vw", height: "100vh"}} />
    </div>
  )
}

export default Maintenance;
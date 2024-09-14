import { useContext, useEffect, useState } from "react";
import "./onlineStatus.css"; // Import the CSS styles
import { OnlineStatusContext } from "../utils/OnlineStatusContext";

const OnlineStatusNotification = () => {
  const isOnline = useContext(OnlineStatusContext);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);

    // Hide the banner after 3 seconds
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [isOnline]); // Trigger effect when `isOnline` changes

  return (
    <div
      className={`online-status-bar ${isOnline ? "online" : "offline"} ${showBanner ? "showStatus" : ""}`}
    >
      <span className="online-status-icon">
        {isOnline ? (
          <span className="icon-online">✔️</span> // Green tick when online
        ) : (
          <span className="icon-offline">❌</span> // Grey cross when offline
        )}
      </span>
      <span>You are {isOnline ? "Online" : "Offline"}</span>
    </div>
  );
};

export default OnlineStatusNotification;

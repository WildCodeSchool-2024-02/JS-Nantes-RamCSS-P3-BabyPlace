import { useState, useEffect } from "react";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import PropTypes from "prop-types";

function UserValidationParent({
  reservationStatus,
  nurseryId,
  reservationDate,
}) {
  const [nurseryInfo, setNurseryInfo] = useState("");

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/api/nurseries/${nurseryId}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setNurseryInfo(data));
  }, [nurseryId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
    ];
    const months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];

    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    const monthName = months[date.getMonth()];

    return `${dayName} ${dayNumber} ${monthName}`;
  };

  let color = "";
  let valeur = "";

  if (reservationStatus === 2) {
    color = "default";
    valeur = "refusée";
  } else if (reservationStatus === 1) {
    color = "success";
    valeur = "validée";
  } else if (reservationStatus === 0) {
    color = "warning";
    valeur = "attente";
  } else if (reservationStatus === 3) {
    color = "danger";
    valeur = "annulée";
  }

  return (
    <article className="w-[100%] flex justify-between items-center texts">
      <User
        name={nurseryInfo.name}
        description={nurseryInfo.email}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
        reservationName={nurseryId}
      />
      <Chip
        className="border rounded-full p-2 text-xs text-white w-[30%]"
        color={color}
      >
        {valeur}
      </Chip>
      <section className="flex flex-col justify-center items-center text-center text-xs  p-5 ">
        <p>{formatDate(reservationDate)}</p>
      </section>
    </article>
  );
}

export default UserValidationParent;

UserValidationParent.propTypes = {
  reservationStatus: PropTypes.number.isRequired,
  nurseryId: PropTypes.number.isRequired,
  reservationDate: PropTypes.string.isRequired,
};

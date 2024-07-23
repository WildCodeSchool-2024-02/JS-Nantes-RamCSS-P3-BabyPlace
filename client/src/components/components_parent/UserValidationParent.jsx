import { useState, useEffect } from "react";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import PropTypes from "prop-types";

function UserValidationParent({
  reservationStatus,
  crecheId,
  reservationDate,
}) {
  const [nurseryInfo, setNurseryInfo] = useState(null);

  useEffect(() => {
    const fetchCrecheInfo = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/nurseries/${crecheId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const nursery = await response.json();
        setNurseryInfo(nursery);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchCrecheInfo();
  }, [crecheId]);

  let color = "";
  let valeur = "";

  if (reservationStatus === 0) {
    color = "default";
    valeur = "en cours";
  } else if (reservationStatus === 1) {
    color = "success";
    valeur = "validée";
  } else if (reservationStatus === 2) {
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
        reservationName={crecheId}
      />
      <Chip
        className="border rounded-full p-2 text-xs text-white w-[30%]"
        color={color}
      >
        {valeur}
      </Chip>
      <section className="flex flex-col justify-center items-center text-center text-xs  p-5 ">
        <p>vendredi</p>
        <p>{reservationDate}</p>
        <p>juillet</p>
      </section>
    </article>
  );
}

export default UserValidationParent;

UserValidationParent.propTypes = {
  reservationStatus: PropTypes.number.isRequired,
  crecheId: PropTypes.number.isRequired,
  reservationDate: PropTypes.string.isRequired,
};

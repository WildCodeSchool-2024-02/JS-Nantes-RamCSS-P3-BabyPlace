import Toolbar from "../../components/components_parent/Toolbar";
import HeaderReservvationParent from "../../components/components_parent/HeaderReservationParent";
import UserValidationParent from "../../components/components_parent/UserValidationParent";

const status = [
  {
    color: "success",
    valeur: "validée",
  },
  {
    color: "warning",
    valeur: "attente",
  },
  {
    color: "default",
    valeur: "en court",
  },
  {
    color: "danger",
    valeur: "annulée",
  },
];

function ReservationStatus() {
  return (
    <>
      <HeaderReservvationParent />
      <section className="p-10 w-[50vw]">
        <UserValidationParent status={status[0]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[2]} />
        <UserValidationParent status={status[3]} />
      </section>
      <Toolbar />
    </>
  );
}

export default ReservationStatus;

import Toolbar from "../../components/components_parent/Toolbar";
import HeaderReservvationParent from "../../components/components_parent/HeaderReservationParent";
import UserValidationParent from "../../components/components_parent/UserValidationParent";

const status = [
  {
    color: "default",
    valeur: "en cours",
  },
  {
    color: "success",
    valeur: "validée",
  },
  {
    color: "warning",
    valeur: "attente",
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
      <section className="p-6 w-[100vw] flex flex-col justify-center itens-center mt-48">
        <UserValidationParent status={status[0]} />
        <UserValidationParent status={status[3]} />
        <UserValidationParent status={status[2]} />
        <UserValidationParent status={status[0]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[3]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
        <UserValidationParent status={status[1]} />
      </section>
      <Toolbar />
    </>
  );
}

export default ReservationStatus;

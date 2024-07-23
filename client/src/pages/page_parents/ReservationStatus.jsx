import { useLoaderData } from "react-router-dom";
import Toolbar from "../../components/components_parent/Toolbar";
import HeaderReservvationParent from "../../components/components_parent/HeaderReservationParent";
import UserValidationParent from "../../components/components_parent/UserValidationParent";

function ReservationStatus() {
  const reservation = useLoaderData();

  return (
    <>
      <HeaderReservvationParent />
      <section className="p-6 w-[100vw] flex flex-col justify-center itens-center mt-48">
        {reservation.map((e) => (
          <UserValidationParent
            key={e}
            crecheId={e.nursery_id}
            reservationDate={e.reservation_date}
            reservationStatus={e.reservation_status}
          />
        ))}
      </section>
      <Toolbar />
    </>
  );
}

export default ReservationStatus;

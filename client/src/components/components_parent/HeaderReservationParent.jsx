function HeaderReservvationParent() {
  const userName = "Alexis Guillon";
  return (
    <header className="w-[50vw] h-[20vh] shadow-lg flex flex-col justify-end p-[10px]">
      <h1 className="text-center texts font-semibold  text-2xl">Réservation</h1>

      <section className="flex texts items-center justify-center end-0">
        <img
          src="../src/assets/images/illustration/Team-memeber-01 1.png"
          className="rounded-full w-[90px] flex-initial w-36"
          alt=""
        />
        <p className="flex-initial w-64 text-center">{userName}</p>
      </section>
    </header>
  );
}

export default HeaderReservvationParent;

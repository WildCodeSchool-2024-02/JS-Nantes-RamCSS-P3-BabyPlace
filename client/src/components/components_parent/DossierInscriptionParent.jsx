import { Input } from "@nextui-org/input";

function DossierInscriptionParent() {
  return (
    <section>
      {/* en attente de creation du formulaire */}
      <form className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2 texts">
        <select className="" id="" label="">
          <option value="">qui êtes vous</option>
          <option value="parent1">parent 1</option>
          <option value="parent2">parent 2</option>
        </select>

        <Input
          type="text"
          label="Nom"
          className="max-w-[284px] texts"
          size="lg"
          name="lastname"
          onChange=""
        />
        <Input
          type="text"
          label="Prénom"
          className="max-w-[284px] texts"
          size="lg"
          name="firstname"
          onChange=""
        />

        <Input
          type="text"
          label="n° et nom de rue"
          className="max-w-[284px] texts"
          size="lg"
          name="street"
          onChange=""
        />
        <Input
          type="text"
          label="Code postal"
          className="max-w-[284px] texts"
          size="lg"
          name="postal_code"
          onChange=""
        />
        <Input
          type="text"
          label="Commune"
          className="max-w-[284px] texts"
          size="lg"
          name="commune"
          onChange=""
        />
        <Input
          type="text"
          label="numéro de téléphone"
          className="max-w-[284px] texts"
          size="lg"
          name="phone"
          onChange=""
        />

        <button
          type="submit"
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
        >
          Soumettre
        </button>
      </form>
    </section>
  );
}

export default DossierInscriptionParent;

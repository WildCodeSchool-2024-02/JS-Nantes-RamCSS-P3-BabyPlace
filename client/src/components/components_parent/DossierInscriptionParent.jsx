import { Input } from "@nextui-org/input";

function DossierInscriptionParent() {
  return (
    <section>
      {/* en attente de creation du formulaire */}
      <form className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
        <select className="" id="" label="">
          <option value="">qui êtes vous</option>
          <option value="papa">papa</option>
          <option value="maman">maman</option>
        </select>

        <Input
          type="text"
          color="secondary"
          label="Nom"
          className="max-w-[284px] texts"
          size="lg"
          name="lastname"
          onChange=""
        />
        <Input
          type="text"
          color="secondary"
          label="Prénom"
          className="max-w-[284px] texts"
          size="lg"
          name="firstname"
          onChange=""
        />

        <Input
          type="text"
          color="secondary"
          label="n° et nom de rue"
          className="max-w-[284px] texts"
          size="lg"
          name="firstname"
          onChange=""
        />
        <Input
          type="text"
          color="secondary"
          label="Code postal"
          className="max-w-[284px] texts"
          size="lg"
          name="lastname"
          onChange=""
        />
        <Input
          type="text"
          color="secondary"
          label="Commune"
          className="max-w-[284px] texts"
          size="lg"
          name="firstname"
          onChange=""
        />
        <Input
          type="text"
          color="secondary"
          label="numéro de téléphone"
          className="max-w-[284px] texts"
          size="lg"
          name="lastname"
          onChange=""
        />
        <Input
          type="text"
          color="secondary"
          label="Nom"
          className="max-w-[284px] texts"
          size="lg"
          name="lastname"
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

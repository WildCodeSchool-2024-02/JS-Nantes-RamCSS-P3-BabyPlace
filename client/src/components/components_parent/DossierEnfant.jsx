import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";

function DossierEnfant() {
  return (
    <form className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
      <Input
        isRequired
        type="text"
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Prénom"
        name=""
        onChange=""
      />
      <Input
        isRequired
        type="text"
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom"
        name=""
        onChange=""
      />

      <DatePicker label="Birth date" className="max-w-[284px]" />

      <section className="flex flex-col items-start justify-start gap-5 w-[280px]">
        <Checkbox value="Crèche parentale" color="secondary">
          Marche t-il ?
        </Checkbox>
        <Checkbox value="Crèche parentale" color="secondary">
          Sait il parler
        </Checkbox>
        <Checkbox value="Micro-Crèche" color="secondary">
          A t il un handicape
        </Checkbox>
        <Checkbox value="autorisation de soins" color="secondary">
          A t-il des allergies
        </Checkbox>
        <Checkbox value="Micro-Crèche" color="secondary">
          Carnet de santée
        </Checkbox>
        <Checkbox value="autorisation de soins" color="secondary">
          {/* <Checkbox value="autorisation de soins" color="secondary" onChange={handleChange}> */}
          autorisation de soins
        </Checkbox>
        <Checkbox value="Micro-Crèche" color="secondary">
          Carnet de santée
        </Checkbox>
      </section>
      <Input
        type="text"
        color="secondary"
        description=""
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom du medecin traitent"
        name=""
        onChange=""
      />

      <button
        type="button"
        className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
      >
        soumettre
      </button>
    </form>
  );
}

export default DossierEnfant;

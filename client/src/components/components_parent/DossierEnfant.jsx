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
        label="Prénom"
        className="max-w-[284px] texts"
        size="lg"
        name="firstname"
        onChange=""
      />
      <Input
        isRequired
        type="text"
        color="secondary"
        label="Nom"
        className="max-w-[284px] texts"
        size="lg"
        name="lastname"
        onChange=""
      />

      <DatePicker label="Birth date" className="max-w-[284px]" />

      <section className="flex flex-col items-start justify-start gap-5 w-[280px]">
        <Checkbox color="secondary" name="is_walker">
          Marche t-il ?
        </Checkbox>
        <Checkbox color="secondary" name="is_disabled">
          A-t-il un handicap reconnu ?
        </Checkbox>
        <Checkbox color="secondary" name="allergies">
          A-t-il des allergies ?
        </Checkbox>
        <Checkbox color="secondary" name="health_book">
          Carnet de santé ?
        </Checkbox>
        <Checkbox color="secondary" name="care_authorization">
          autorisation de soins ?
        </Checkbox>
      </section>
      <Input
        type="text"
        color="secondary"
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom du medecin traitant"
        name="Rentrez le nom de votre médecin traitant"
        onChange=""
      />

      <button
        type="submit"
        className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
      >
        Soumettre
      </button>
    </form>
  );
}

export default DossierEnfant;

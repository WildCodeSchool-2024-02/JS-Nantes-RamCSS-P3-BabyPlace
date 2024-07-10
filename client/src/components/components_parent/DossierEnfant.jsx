import { Input, DatePicker, Checkbox } from "@nextui-org/react";

function DossierEnfant() {
  return (
    <section className="h-[75vh] bg-white">
      <Input
        isRequired
        type="text"
        variant=""
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
        variant=""
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom"
        name=""
        onChange=""
      />

      <Checkbox value="Crèche parentale">Sait il parler</Checkbox>
      <Checkbox value="Micro-Crèche">A t il un handicape</Checkbox>
      <Checkbox value="Crèche d'entreprise">Crèche d'entreprise</Checkbox>

      <DatePicker label="Birth date" className="max-w-[284px]" />

      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        name=""
      />
      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        name=""
      />
      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        name=""
      />
      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom du médecin traitent"
        name=""

      />
      <Checkbox value="autorisation de soins">autorisation de soins</Checkbox>
    </section>
  );
}

export default DossierEnfant;

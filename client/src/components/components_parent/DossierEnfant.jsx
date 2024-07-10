import { Input, DatePicker, Checkbox } from "@nextui-org/react";

function DossierEnfant() {
  return (
    <section>
      <Input
        isRequired
        type="text"
        variant=""
        color="secondary"
        label=""
        description=""
        className="texts"
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
        className="w-[600px] texts"
        size="lg"
        placeholder="Nom"
        name=""
        onChange=""
      />

      <Checkbox value="Crèche parentale">Crèche parentale</Checkbox>
      <Checkbox value="Micro-Crèche">Micro-Crèche</Checkbox>
      <Checkbox value="Crèche d'entreprise">Crèche d'entreprise</Checkbox>

      <DatePicker label="Birth date" className="max-w-[284px]" />

      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="w-[600px] texts"
        size="lg"
        name=""
        onChange=""
      />
      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="w-[600px] texts"
        size="lg"
        name=""
        onChange=""
      />
      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="w-[600px] texts"
        size="lg"
        name=""
        onChange=""
      />
      <Input
        isRequired
        type="file"
        variant=""
        color="secondary"
        label=""
        description=""
        className="w-[600px] texts"
        size="lg"
        placeholder="Nom du médecin traitent"
        name=""
        onChange=""
      />
      <Checkbox value="autorisation de soins">autorisation de soins</Checkbox>
    </section>
  );
}

export default DossierEnfant;

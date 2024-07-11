import { Input, DatePicker, Checkbox } from "@nextui-org/react";

function DossierEnfant() {
  return (
    <section className="h-[75vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
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
      <section className="flex flex-col items-start justify-start gap-5 w-[280px]">
        <Checkbox value="Crèche parentale">Sait il parler</Checkbox>
        <Checkbox value="Micro-Crèche">A t il un handicape</Checkbox>
        <Checkbox value="autorisation de soins" className="w-[280px]">
          autorisation de soins
        </Checkbox>
      </section>
    </section>
  );
}

export default DossierEnfant;

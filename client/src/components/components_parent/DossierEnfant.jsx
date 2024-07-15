import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";
// import { useState } from "react";

function DossierEnfant() {
  // const[test, setTest] = useState(false);
  // console.log('%c⧭', 'color: #364cd9', test);

  // const handleChange = () =>{
  //   setTest(!test);
  // }

  return (
    <form className="h-[75vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
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
        variant=""
        color="secondary"
        description=""
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom du medecin traitent"
        name=""
        onChange=""
      />
      {/* <button >soumettre</button> */}
    </form>
  );
}

export default DossierEnfant;

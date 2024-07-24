import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";

function DossierEnfant() {
  const userId = localStorage.getItem("parent_id");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: "2022-04-19",
    is_walker: false,
    is_disabled: false,
    allergies: false,
    health_book: false,
    name_doctor: "",
    care_authorization: false,
    parent_id: userId,
    insurance_certificate: false,
  });
  // console.log('%c⧭', 'color: #917399', formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("ID utilisateur introuvable");
      return;
    }

    // Appel API pour envoyer les données à la base de données
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/children/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }
    } catch (error) {
      console.error("Erreur:", error);
      // Gérez les erreurs ici
    }
  };

  return (
    <form className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
      <Input
        isRequired
        type="text"
        label="Prénom"
        className="max-w-[284px] texts"
        size="lg"
        name="firstname"
        onChange={handleInputChange}
      />
      <Input
        isRequired
        type="text"
        label="Nom"
        className="max-w-[284px] texts"
        size="lg"
        name="lastname"
        onChange={handleInputChange}
      />

      <DatePicker
        label="Birth date"
        className="max-w-[284px]"
        // selected={formData.birthdate}
        onChange={(date) => setFormData({ ...formData, birthday: date })}
      />

      <section className="flex flex-col items-start justify-start gap-5 w-[280px]">
        <Checkbox
          color="secondary"
          name="is_walker"
          checked={formData.is_walker}
          onChange={handleCheckboxChange}
        >
          Marche-t-il ?
        </Checkbox>
        <Checkbox
          color="secondary"
          name="is_disabled"
          checked={formData.is_disabled}
          onChange={handleCheckboxChange}
        >
          A-t-il un handicap reconnu ?
        </Checkbox>
        <Checkbox
          color="secondary"
          name="allergies"
          checked={formData.allergies}
          onChange={handleCheckboxChange}
        >
          A-t-il des allergies ?
        </Checkbox>
        <Checkbox
          color="secondary"
          name="health_book"
          checked={formData.health_book}
          onChange={handleCheckboxChange}
        >
          Carnet de santé ?
        </Checkbox>
        <Checkbox
          color="secondary"
          name="care_authorization"
          checked={formData.care_authorization}
          onChange={handleCheckboxChange}
        >
          autorisation de soins ?
        </Checkbox>
      </section>
      <Input
        type="text"
        className="max-w-[284px] texts"
        size="lg"
        placeholder="Nom du medecin traitant"
        name="name_doctor"
        value={formData.name_doctor}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
      >
        Enregistrer
      </button>
    </form>
  );
}

export default DossierEnfant;

// import { useState } from "react";
// import { Input } from "@nextui-org/input";
// import { Checkbox } from "@nextui-org/checkbox";
// import { DatePicker } from "@nextui-org/date-picker";

// function DossierEnfant() {
//   const userId = localStorage.getItem("parent_id");
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     birthday: "2022-04-19",
//     is_walker: false,
//     is_disabled: false,
//     allergies: false,
//     health_book: false,
//     name_doctor: "",
//     care_authorization: false,
//     parent_id: userId,
//     insurance_certificate: false,
//   });
//   // console.log('%c⧭', 'color: #917399', formData);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData({ ...formData, [name]: checked });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userId) {
//       console.error("ID utilisateur introuvable");
//       return;
//     }

//     // Appel API pour envoyer les données à la base de données
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/api/children/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Erreur lors de l'envoi des données");
//       }
//     } catch (error) {
//       console.error("Erreur:", error);
//       // Gérez les erreurs ici
//     }
//   };

//   return (
//     <>
//     <select name="children.id" id="">
//       <option value="1">nouvelle enfant</option>
//     </select>
//       <form className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
//         <Input
//           isRequired
//           type="text"
//           label="Prénom"
//           className="max-w-[284px] texts"
//           size="lg"
//           name="firstname"
//           onChange={handleInputChange}
//         />
//         <Input
//           isRequired
//           type="text"
//           label="Nom"
//           className="max-w-[284px] texts"
//           size="lg"
//           name="lastname"
//           onChange={handleInputChange}
//         />

//         <DatePicker
//           label="Birth date"
//           className="max-w-[284px]"
//           // selected={formData.birthdate}
//           onChange={(date) => setFormData({ ...formData, birthday: date })}
//         />

//         <section className="flex flex-col items-start justify-start gap-5 w-[280px]">
//           <Checkbox
//             color="secondary"
//             name="is_walker"
//             checked={formData.is_walker}
//             onChange={handleCheckboxChange}
//           >
//             Marche-t-il ?
//           </Checkbox>
//           <Checkbox
//             color="secondary"
//             name="is_disabled"
//             checked={formData.is_disabled}
//             onChange={handleCheckboxChange}
//           >
//             A-t-il un handicap reconnu ?
//           </Checkbox>
//           <Checkbox
//             color="secondary"
//             name="allergies"
//             checked={formData.allergies}
//             onChange={handleCheckboxChange}
//           >
//             A-t-il des allergies ?
//           </Checkbox>
//           <Checkbox
//             color="secondary"
//             name="health_book"
//             checked={formData.health_book}
//             onChange={handleCheckboxChange}
//           >
//             Carnet de santé ?
//           </Checkbox>
//           <Checkbox
//             color="secondary"
//             name="care_authorization"
//             checked={formData.care_authorization}
//             onChange={handleCheckboxChange}
//           >
//             autorisation de soins ?
//           </Checkbox>
//         </section>
//         <Input
//           type="text"
//           className="max-w-[284px] texts"
//           size="lg"
//           placeholder="Nom du medecin traitant"
//           name="name_doctor"
//           value={formData.name_doctor}
//           onChange={handleInputChange}
//         />

//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
//         >
//           Enregistrer
//         </button>
//       </form>
//     </>
//   );
// }

// export default DossierEnfant;

import { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";

function DossierEnfant() {
  const userId = localStorage.getItem("parent_id");
  const [children, setChildren] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState("new");
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

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/children/parent/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          console.warn("Données reçues de l'API:", data);
          if (Array.isArray(data)) {
            setChildren(data); // Assurez-vous que data est un tableau
          } else {
            console.error("Données reçues ne sont pas un tableau:", data);
            setChildren([]); // Initialiser à un tableau vide si les données ne sont pas correctes
          }
        } else {
          console.error("Erreur lors de la récupération des enfants");
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchChildren();
  }, [userId]);

  const handleSelectChange = (e) => {
    const childId = e.target.value;
    setSelectedChildId(childId);
    if (childId === "new") {
      setFormData({
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
    } else {
      const selectedChild = children.find(
        (child) => child.id === parseInt(childId, 10)
      );
      if (selectedChild) {
        setFormData(selectedChild);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birthday: date.toISOString().split("T")[0], // Format yyyy-mm-dd
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("ID utilisateur introuvable");
      return;
    }

    try {
      const method = selectedChildId === "new" ? "POST" : "PUT";
      const url = `${import.meta.env.VITE_API_URL}/api/children${selectedChildId !== "new" ? `/${selectedChildId}` : ""}`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }

      const result = await response.json();

      // Mettre à jour la liste des enfants après une soumission réussie
      const updatedChildren =
        selectedChildId === "new"
          ? [...children, result]
          : children.map((child) => (child.id === result.id ? result : child));

      setChildren(updatedChildren);

      if (selectedChildId === "new") {
        setSelectedChildId(result.id.toString());
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <>
      <select
        name="children"
        onChange={handleSelectChange}
        value={selectedChildId}
      >
        <option value="new">Nouvel enfant</option>
        {Array.isArray(children) ? (
          children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.firstname} {child.lastname}
            </option>
          ))
        ) : (
          <option disabled>Pas d'enfants disponibles</option>
        )}
      </select>
      <form
        onSubmit={handleSubmit}
        className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2"
      >
        <Input
          isRequired
          type="text"
          label="Prénom"
          className="max-w-[284px] texts"
          size="lg"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <Input
          isRequired
          type="text"
          label="Nom"
          className="max-w-[284px] texts"
          size="lg"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
        <DatePicker
          label="Date de naissance"
          className="max-w-[284px]"
          selected={new Date(formData.birthday)}
          onChange={handleDateChange}
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
            Autorisation de soins ?
          </Checkbox>
        </section>
        <Input
          type="text"
          className="max-w-[284px] texts"
          size="lg"
          placeholder="Nom du médecin traitant"
          name="name_doctor"
          value={formData.name_doctor}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
        >
          Enregistrer
        </button>
      </form>
    </>
  );
}

export default DossierEnfant;

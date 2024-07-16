import { Checkbox } from "@nextui-org/checkbox";

function DossierInscription() {
  return (
    <form className="h-[72vh] bg-white flex flex-center flex-col items-center justify-center gap-2">
      <section className="flex flex-col items-start justify-start gap-5 w-[280px] texts">
        <Checkbox color="secondary" name="taxe_filling">
          Justificatif de revenu (moins de 3 mois)
        </Checkbox>
        <Checkbox color="secondary" name="proof_of_income">
          Déclaration de revenu (année en cours)
        </Checkbox>
        <Checkbox color="secondary" name="allergies">
          Numéro Allocataire CAF
        </Checkbox>

        <Checkbox color="secondary" name="social_security_number">
          Numéro de sécurité sociale{" "}
        </Checkbox>
        <Checkbox color="secondary" name="caf_number">
          Justificatif de domicile{" "}
        </Checkbox>
        <Checkbox color="secondary" name="job">
          Justificatif de situation professionnelle{" "}
        </Checkbox>
        <Checkbox color="secondary" name="rib">
          RIB{" "}
        </Checkbox>
        <Checkbox color="secondary" name="photo_and_video_authorization">
          Autorisation photos et vidéos{" "}
        </Checkbox>
        <Checkbox color="secondary" name="exit_permit">
          Autorisation de sortie{" "}
        </Checkbox>
        <Checkbox color="secondary" name="copy_of_family_record_book">
          Copie livret de famille{" "}
        </Checkbox>
        <Checkbox color="secondary" name="copy_of_divorce_judgment">
          Copie du jugement de divorce (si divorce){" "}
        </Checkbox>
      </section>

      <button
        type="submit"
        className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
      >
        Soumettre
      </button>
    </form>
  );
}

export default DossierInscription;

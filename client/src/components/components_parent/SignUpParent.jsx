/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useMemo } from "react";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";

import PropTypes from "prop-types";
import EyeFilledIcon from "../../assets/nextUI/EyeFilledIcon";
import EyeSlashFilledIcon from "../../assets/nextUI/EyeSlashFilledIcon";

function SignUpParent({ setSelected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value) =>
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;

    return !validateEmail(email);
  }, [email]);

  const validatePassword = (value) =>
    value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );

  const isInvalidPassword = useMemo(() => {
    if (password === "") return false;

    return !validatePassword(password);
  }, [password]);

  const handleCheckboxClick = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  //* Function handleSubmit for registration

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData);
    fetch("http://localhost:3310/api/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-[200px]">
      <Input
        name="firstname"
        label="Prénom"
        isRequired
        placeholder="Entrez votre Prénom"
        type="text"
        title="Veuillez entrer votre prénom"
      />
      <Input
        name="email"
        value={email}
        type="email"
        label="email"
        isRequired
        placeholder="Entrez votre Email"
        variant="flat"
        isInvalid={isInvalidEmail}
        color={isInvalidEmail ? "danger" : ""}
        onValueChange={setEmail}
        className="max-w-xs"
        errorMessageClass="error-message"
        title="Veuillez entrer un email valide"
      />
      <Input
        name="password"
        label="Mot de passe"
        isRequired
        variant="flat"
        placeholder="Entrez votre mot de passe"
        type={isVisible ? "text" : "password"}
        isInvalid={isInvalidPassword}
        color={isInvalidPassword ? "danger" : ""}
        onValueChange={setPassword}
        title="Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
        className="max-w-xs "
        endContent={
          <button
            className="focus:outline-none "
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />
      <Input
        label="Confirmation mot de passe"
        isRequired
        id="confirm-password"
        variant="flat"
        title="Les mots de passe doivent correspondre"
        placeholder="Confirmez votre mot de passe"
        type={isVisible ? "text" : "password"}
        isInvalid={
          document.activeElement ===
            document.getElementById("confirm-password") &&
          confirmPassword !== password
        }
        color={
          document.activeElement ===
            document.getElementById("confirm-password") &&
          confirmPassword !== password
            ? "danger"
            : ""
        }
        onValueChange={setConfirmPassword}
        className="max-w-xs "
        endContent={
          <button
            className="focus:outline-none "
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />
      <Checkbox
        color="secondary"
        isSelected={isTermsChecked}
        onClick={handleCheckboxClick}
      >
        *J'accepte les conditions d'utilisation
      </Checkbox>
      <p className="text-center text-small">
        Vous avez déjà un compte ?{" "}
        <Link
          className="cursor-pointer"
          size="sm"
          onPress={() => setSelected("login")}
        >
          Connexion
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button
          type="submit"
          isDisabled={!isTermsChecked || !validatePassword || !validateEmail}
          variant="shadow"
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          fullWidth
          color="primary"
        >
          S'inscrire
        </Button>
      </div>

      <section className="checked-value-form">
        {isInvalidEmail && (
          <p className="text-white text-sm md:text-black">
            Veuillez entrer un email valide
          </p>
        )}
        {isInvalidPassword && (
          <p className="text-white text-sm md:text-black">
            Le mot de passe doit contenir au moins 8 caractères, une majuscule,
            une minuscule, un chiffre et un caractère spécial
          </p>
        )}
        {document.activeElement ===
          document.getElementById("confirm-password") &&
          confirmPassword !== password && (
            <p className="text-white text-sm md:text-black">
              Les mots de passe ne correspondent pas
            </p>
          )}
      </section>
    </form>
  );
}

SignUpParent.propTypes = {
  setSelected: PropTypes.func.isRequired,
};

export default SignUpParent;

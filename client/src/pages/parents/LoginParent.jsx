/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Input, Link, Checkbox } from "@nextui-org/react";
import EyeFilledIcon from "../../assets/nextUI/EyeFilledIcon";
import EyeSlashFilledIcon from "../../assets/nextUI/EyeSlashFilledIcon";


function LoginParent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regexEmail = React.useMemo(
    () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    []
  ); // !explication du regex pour la vérification email
  // ?  ^ : Début de la chaîne.
  // ?[a-zA-Z0-9._%+-]+ : Un ou plusieurs caractères autorisés dans la partie locale (avant le @). Les caractères autorisés incluent les lettres majuscules et minuscules, les chiffres, ainsi que ._%+-.
  // ?@ : Le symbole @ séparant la partie locale et le domaine.
  // ?[a-zA-Z0-9.-]+ : Un ou plusieurs caractères autorisés dans le nom de domaine. Les caractères autorisés incluent les lettres majuscules et minuscules, les chiffres, ainsi que .-.
  // ?\. : Un point littéral . séparant le domaine et l'extension de domaine.
  // ?[a-zA-Z]{2,} : Deux caractères ou plus pour l'extension de domaine (TLD). Les caractères autorisés incluent les lettres majuscules et minuscules.
  // ?$ : Fin de la chaîne.

  const regexPassword = React.useMemo(
    () =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    []
  ); // !explication du regex pour la validation mot de passe
  // ? ^ : Début de la chaîne.
  // ??=.*[a-z]) : Doit contenir au moins une lettre minuscule.
  // ??=.*[A-Z]) : Doit contenir au moins une lettre majuscule.
  // ??=.*\d) : Doit contenir au moins un chiffre.
  // ??=.*[@$!%*?&]) : Doit contenir au moins un caractère spécial parmi @$!%*?&.
  // ?A-Za-z\d@$!%*?&]{8,} : La chaîne doit être constituée de lettres majuscules, lettres minuscules, chiffres et caractères spéciaux mentionnés, et doit avoir au moins 8 caractères.$ : Fin de la chaîne.

  const validateEmail = React.useCallback(
    (value) => value.match(regexEmail),
    [regexEmail]
  );
  const validatePassword = React.useCallback(
    (value) => value.match(regexPassword),
    [regexPassword]
  );

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email, validateEmail]);

  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password, validatePassword]);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [selected, setSelected] = React.useState("login");
  console.warn("%c⧭", "color: #f200e2", selected);
  return (
    <form className="flex flex-col gap-4 h-[300px]">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text"
      />
      <Input
        value={email}
        type="email"
        label="Email"
        variant="flat"
        isInvalid={isEmailInvalid}
        color={isEmailInvalid ? "danger" : "success"} // pour background
        // errorMessage="Veuillez entrer un email valide"
        onValueChange={setEmail}
        className="max-w-xs text-danger-700"
        errorMessageClass="error-message"
      />
      <Input
        label="Password"
        variant="flat"
        placeholder="Enter your password"
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
        type={isVisible ? "text" : "password"}
        isInvalid={isPasswordInvalid}
        color={isPasswordInvalid ? "danger" : "success"}
        onValueChange={setPassword}
        className="max-w-xs "
      />
      <Input
        label="Confirmation de Password"
        variant="flat"
        placeholder="Enter your password"
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
        type={isVisible ? "text" : "password"}
        isInvalid={isPasswordInvalid}
        color={isPasswordInvalid ? "danger" : "success"}
        onValueChange={setPassword}
        className="max-w-xs "
      />
      <Checkbox color="secondary" defaultSelected>
        J'accepte les conditions d'utilisation
      </Checkbox>
      <p className="text-center text-small">
        Already have an account?{" "}
        <Link size="sm" onPress={() => setSelected("login")}>
          Login
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button
          variant="shadow"
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          fullWidth
          color="primary"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default LoginParent;

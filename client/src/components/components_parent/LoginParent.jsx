/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Button, Input, Link } from "@nextui-org/react";
import EyeFilledIcon from "../../assets/nextUI/EyeFilledIcon";
import EyeSlashFilledIcon from "../../assets/nextUI/EyeSlashFilledIcon";

function SignUpParent({
  setEmailChecked,
  setPasswordChecked,
  checkBtnConnexion,
  setSelected,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const regexEmail = React.useMemo(
    () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    []
  );

  const regexPassword = React.useMemo(
    () =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    []
  );
  const validateEmail = useCallback(
    (value) => regexEmail.test(value),
    [regexEmail]
  );
  const validatePassword = useCallback(
    (value) => regexPassword.test(value),
    [regexPassword]
  );
  const toggleVisibility = () => setIsVisible(!isVisible);

  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email, validateEmail]);

  const isPasswordInvalid = useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password, validatePassword]);

  useEffect(() => {
    setEmailChecked(email !== "" && !isEmailInvalid);
  }, [email, isEmailInvalid, setEmailChecked]);

  useEffect(() => {
    setPasswordChecked(password !== "" && !isPasswordInvalid);
  }, [password, isPasswordInvalid, setPasswordChecked]);

  return (
    <form className="flex flex-col gap-3">
      <Input
        value={email}
        type="email"
        label="Email"
        placeholder="Entrez votre Email"
        variant="flat"
        isInvalid={isEmailInvalid}
        color={isEmailInvalid ? "danger" : ""}
        onValueChange={setEmail}
        className="max-w-xs text-danger-700"
        errorMessageClass="error-message"
      />
      <Input
        label="Mot de passe"
        variant="flat"
        placeholder="Entez votre mot de passe"
        endContent={
          <button
            className="focus:outline-none"
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
        color={isPasswordInvalid ? "danger" : ""}
        onValueChange={setPassword}
        className="max-w-xs"
      />
      <p className="text-center text-small">
        Besoin de créer un compte ?{" "}
        <Link size="sm" onPress={() => setSelected("sign-up")}>
          S'inscrire
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button
          isDisabled={!checkBtnConnexion}
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          variant="shadow"
          fullWidth
          color="primary"
        >
          Connexion
        </Button>
      </div>

      <section className="checked-value-form">
        {isEmailInvalid && (
          <p className="text-white text-sm md:text-black">
            Veuillez entrer un email valide
          </p>
        )}
        {isPasswordInvalid && (
          <p className="text-white text-sm md:text-black">
            Le mot de passe doit contenir au moins 8 caractères, une majuscule,
            une minuscule, un chiffre et un caractère spécial
          </p>
        )}
      </section>
    </form>
  );
}

SignUpParent.propTypes = {
  setEmailChecked: PropTypes.func.isRequired,
  setPasswordChecked: PropTypes.func.isRequired,
  checkBtnConnexion: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
};
export default SignUpParent;

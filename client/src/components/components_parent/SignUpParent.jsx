/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Button, Input, Link, Checkbox } from "@nextui-org/react";
import EyeFilledIcon from "../../assets/nextUI/EyeFilledIcon";
import EyeSlashFilledIcon from "../../assets/nextUI/EyeSlashFilledIcon";

function SignUpParent({
  setEmailChecked,
  setPasswordChecked,
  setSelected,
  checkBtnConnexion,
}) {
  const regexEmail = useMemo(
    () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    []
  );

  const regexPassword = useMemo(
    () =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    []
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = useCallback(
    (value) => regexEmail.test(value),
    [regexEmail]
  );

  const validatePassword = useCallback(
    (value) => regexPassword.test(value),
    [regexPassword]
  );

  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email, validateEmail]);

  const isPasswordInvalid = useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password, validatePassword]);

  const isConfirmPasswordInvalid = useMemo(() => {
    if (confirmPassword === "") return false;
    return confirmPassword !== password;
  }, [confirmPassword, password]);

  useEffect(() => {
    setEmailChecked(email !== "" && !isEmailInvalid);
  }, [email, isEmailInvalid, setEmailChecked]);

  useEffect(() => {
    setPasswordChecked(
      password !== "" &&
        !isPasswordInvalid &&
        confirmPassword !== "" &&
        !isConfirmPasswordInvalid
    );
  }, [
    password,
    confirmPassword,
    isPasswordInvalid,
    isConfirmPasswordInvalid,
    setPasswordChecked,
  ]);

  const handleCheckboxClick = () => {
    // Permet de cocher mais pas de décocher

    setIsTermsChecked(!isTermsChecked);
  };

  return (
    <form className="flex flex-col gap-4 h-[300px]">
      <Input isRequired label="Nom" placeholder="Entez votre nom" type="text" />
      <Input
        isRequired
        value={email}
        type="email"
        label="Email"
        placeholder="Entrez votre Email"
        variant="flat"
        isInvalid={isEmailInvalid}
        color={isEmailInvalid ? "danger" : "success"}
        onValueChange={setEmail}
        className="max-w-xs text-danger-700"
        errorMessageClass="error-message"
      />
      <Input
        isRequired
        label="Mot de passe"
        variant="flat"
        placeholder="Entez votre mot de passe"
        type={isVisible ? "text" : "password"}
        isInvalid={isPasswordInvalid}
        color={isPasswordInvalid ? "danger" : "success"}
        onValueChange={setPassword}
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
        label="Mot de passe"
        variant="flat"
        placeholder="Confirmez votre mot de passe"
        type={isVisible ? "text" : "password"}
        isInvalid={isConfirmPasswordInvalid}
        color={isConfirmPasswordInvalid ? "danger" : "success"}
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
        <Link size="sm" onPress={() => setSelected("login")}>
          Connexion
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button
          isDisabled={!checkBtnConnexion || !isTermsChecked}
          variant="shadow"
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          fullWidth
          color="primary"
        >
          S'inscrire
        </Button>
      </div>
      {isEmailInvalid && (
        <p className="text-white text-sm mt-2">
          Veuillez entrer un email valide
        </p>
      )}
      {isPasswordInvalid && (
        <p className="text-white text-sm ">
          Le mot de passe doit contenir au moins 8 caractères, une majuscule,
          une minuscule, un chiffre et un caractère spécial
        </p>
      )}
      {isConfirmPasswordInvalid && (
        <p className="text-white text-sm ">
          Les mots de passe ne correspondent pas
        </p>
      )}
    </form>
  );
}

SignUpParent.propTypes = {
  setEmailChecked: PropTypes.func.isRequired,
  setPasswordChecked: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
  checkBtnConnexion: PropTypes.bool.isRequired,
};

export default SignUpParent;

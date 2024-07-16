/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import EyeFilledIcon from "../../assets/nextUI/EyeFilledIcon";
import EyeSlashFilledIcon from "../../assets/nextUI/EyeSlashFilledIcon";

function LoginPro({ setSelected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();

  const handleFetch = async (data) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/nurseries/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (email && password) {
        await handleFetch({ email, password });
        localStorage.setItem("token", true);

        if (localStorage.getItem("token")) {
          navigate("/pro/dashboard");
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        value={email}
        type="email"
        label="Email"
        placeholder="Entrez votre Email"
        variant="flat"
        onValueChange={setEmail}
        className="max-w-xs"
        errorMessageClass="error-message"
      />
      <Input
        label="Mot de passe"
        variant="flat"
        placeholder="Entez votre mot de passe"
        value={password}
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
        onValueChange={setPassword}
        className="max-w-xs"
      />
      <p className="text-center text-small">
        Besoin de créer un compte ?{" "}
        <Link
          className="cursor-pointer"
          size="sm"
          onPress={() => setSelected("signup")}
        >
          S'inscrire
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button
          isDisabled={!email || !password}
          className="bg-gradient-to-tr from-purple-600 to-blue-400 text-white shadow-lg texts"
          variant="shadow"
          fullWidth
          color="primary"
          type="submit"
        >
          Connexion
        </Button>
      </div>
    </form>
  );
}

LoginPro.propTypes = {
  setSelected: PropTypes.func.isRequired,
};

export default LoginPro;

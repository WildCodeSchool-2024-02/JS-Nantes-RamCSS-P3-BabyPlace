import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import PropTypes from "prop-types";

function UserValidationParent({ status }) {
  return (
    <article className="w-[50%] flex items-center texts">
      <User
        name="Jane Doe"
        description="Nom de la crêche"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />
      <Chip
        className="border rounded-full p-2 text-xs text-white w-[30%]"
        color={status.color}
      >
        {status.valeur}
      </Chip>
      <section className="flex flex-col justify-center items-center text-center text-xs  p-5 ">
        <p>vendredi</p>
        <p>26</p>
        <p>juillet</p>
      </section>
    </article>
  );
}

export default UserValidationParent;

UserValidationParent.propTypes = {
  status: PropTypes.string.isRequired,
};

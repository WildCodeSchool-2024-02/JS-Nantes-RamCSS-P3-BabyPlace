import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

// import PropTypes from "prop-types";

const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-secondary bg-secondary hover:bg-secondary-500 hover:border-secondary-500",
        content: "text-secondary-foreground pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

function CustomCheckbox(props) {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });
  const baseProps = getBaseProps();
  const inputProps = getInputProps();
  const labelProps = getLabelProps();

  return (
    <label
      className={baseProps.className}
      role={baseProps.role}
      aria-checked={baseProps["aria-checked"]}
      tabIndex={baseProps.tabIndex}
    >
      <VisuallyHidden>
        <input
          type={inputProps.type}
          checked={inputProps.checked}
          onChange={inputProps.onChange}
          onFocus={inputProps.onFocus}
          onBlur={inputProps.onBlur}
          aria-labelledby={inputProps["aria-labelledby"]}
        />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        variant="faded"
        role={labelProps.role}
        aria-checked={labelProps["aria-checked"]}
        tabIndex={labelProps.tabIndex}
        onClick={labelProps.onClick}
        onKeyDown={labelProps.onKeyDown}
      >
        {children || (isSelected ? "Enabled" : "Disabled")}
      </Chip>
    </label>
  );
}

// Props Validation
// CustomCheckbox.propTypes = {
//   setComponent: PropTypes.func.isRequired,
// };

export default CustomCheckbox;

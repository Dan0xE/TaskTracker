import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({
  title,
  onAdd,
  showAdd,
}: {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
}) => {
  return (
    <header className="flex flex-col w-96">
      <h1 className="mt-10 mb-10">{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

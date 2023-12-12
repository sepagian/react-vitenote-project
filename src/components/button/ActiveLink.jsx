import { PropTypes } from "prop-types";
import { Link, useRoute } from "wouter";
const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a
        className={
          isActive ? "font-bold underline decoration-2 underline-offset-8" : ""
        }
      >
        {props.children}
      </a>
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.array,
};
export default ActiveLink;

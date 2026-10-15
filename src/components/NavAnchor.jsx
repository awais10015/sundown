import { useNavigateToSection } from "../hooks/useNavigateToSection";
import { navHref } from "../data/navLinks";

const NavAnchor = ({ id, label, className, children, onAfterNavigate }) => {
  const navigate = useNavigateToSection();

  const handleClick = (event) => {
    navigate(id, event);
    onAfterNavigate?.();
  };

  return (
    <a href={navHref(id)} className={className} onClick={handleClick}>
      {children ?? label}
    </a>
  );
};

export default NavAnchor;

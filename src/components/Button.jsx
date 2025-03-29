import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const handleClick = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault(); // Evita la navegación del `Link`
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={href} className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );
};

export default Button;

/* Card for boxed layout content */

const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-6 ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;

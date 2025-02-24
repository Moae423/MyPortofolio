export const Button = ({ children: slug, ...props }) => {
  return <button {...props}>{slug}</button>;
};

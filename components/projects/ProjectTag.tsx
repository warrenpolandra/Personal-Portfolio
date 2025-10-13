import React from "react";

const ProjectTag = ({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}) => {
  const buttonStyles = isSelected
    ? "border-primary-500"
    : "border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 ${buttonStyles} px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

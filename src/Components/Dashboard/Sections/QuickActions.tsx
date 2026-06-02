import { Button } from "../../Props";

interface Action {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface QuickActionsProps {
  actions: Action[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => (
        <Button
          key={action.label}
          label={action.label}
          icon={action.icon}
          onClick={action.onClick}
          variant="outline"
          className="
            h-17.5!
            rounded-xl!
            !border-[#DCEFE5]
            !bg-white
            !text-[#008847]
            hover:!bg-[#F4FBF7]
            !font-semibold
          "
        />
      ))}
    </div>
  );
};

export default QuickActions;

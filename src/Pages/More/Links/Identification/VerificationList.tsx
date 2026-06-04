import { CircleCheck, CircleAlert } from "lucide-react";

interface Props {
  activeTab: string;
  onChange: (tab: string) => void;
}

const items = [
  {
    id: "bvn",
    title: "BVN",
    status: "pending",
    description: "Not verified",
  },

  {
    id: "id-document",
    title: "ID document",
    status: "verified",
    description: "Verified",
  },

  {
    id: "home-address",
    title: "Home address",
    status: "pending",
    description: "Not verified",
  },
];

const VerificationList = ({ activeTab, onChange }: Props) => {
  return (
    <div className="border rounded-xl p-6 bg-white">
      <h3 className="font-semibold mb-6">Identification</h3>

      <div className="space-y-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`
              w-full
              flex
              justify-between
              items-center
              text-left
            `}
          >
            <div>
              <p className="font-medium">{item.title}</p>

              <p className="text-sm text-[#8B8B8B]">{item.description}</p>
            </div>

            {item.status === "verified" ? (
              <CircleCheck size={20} className="text-green-600" />
            ) : (
              <CircleAlert size={20} className="text-[#0F172A]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerificationList;

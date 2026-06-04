import { useState } from "react";
import { Button } from "../../../../Components/Props";

// import Button from "../../../../Components/Buttons/Button";

const HomeAddressForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border
        rounded-xl
        p-8
        bg-white
      "
    >
      <p className="text-center mb-8">Upload proof of address</p>

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="
          w-full
          border
          rounded-lg
          p-3
        "
      />

      <Button label="Verify" type="submit" className="w-full mt-6" />
    </form>
  );
};

export default HomeAddressForm;

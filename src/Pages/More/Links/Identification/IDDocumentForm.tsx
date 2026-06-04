import { useState } from "react";
import { Button, Input } from "../../../../Components/Props";

const IDDocumentForm = () => {
  const [nin, setNin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(nin);
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
      <p className="text-center mb-8">Verify your identity document</p>

      <Input
        value={nin}
        onChange={(e) => setNin(e.target.value)}
        placeholder="NIN"
      />

      <Button label="Verify" type="submit" className="w-full mt-6" />
    </form>
  );
};

export default IDDocumentForm;

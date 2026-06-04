import { useState } from "react";
import { Button, Input } from "../../../../Components/Props";

const BVNForm = () => {
  const [bvn, setBvn] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(bvn);
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
      <p className="text-center mb-8">
        To remove all limits on your account, we need to verify your BVN
      </p>

      <Input
        value={bvn}
        onChange={(e) => setBvn(e.target.value)}
        placeholder="BVN"
      />

      <Button label="Verify" type="submit" className="w-full mt-6" />
    </form>
  );
};

export default BVNForm;

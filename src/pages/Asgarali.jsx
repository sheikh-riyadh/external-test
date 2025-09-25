import { useState } from "react";
import { useSearchDelay } from "../hooks/useSearchDelay";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import AsgaraliTable from "../components/pages/Asgarali/AsgaraliTable";
import Modal from "../components/modals/Modal";
import AsgaraliForm from "../components/pages/Asgarali/AsgaraliForm";

const Asgarali = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <span className="font-bold text-xl text-primary uppercase">{`Asgar-ali test`}</span>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Input placeholder="Search..." className="bg-card" onChange={handleChange} />
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-36"
            >
              Add test
            </Button>
          </div>
        </div>
        <div className="bg-card border border-border-primary rounded-sm overflow-hidden">
          <AsgaraliTable search={searchValue} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add Test"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <AsgaraliForm/>
        </Modal>
      )}
    </div>
  );
};

export default Asgarali;
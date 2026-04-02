import useColumnDef from "@/hooks/useColumnDef";
import DataTable from "@/components/common/DataTable";
import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import DeleteModal from "@/modal/DeleteModal";
import { DELETE_KYC_IMAGE } from "@/lib/images";
import SuspendUserModal from "@/modal/SuspendUserModal";

const PlayerManagement = () => {
  const [suspendModal, setSuspendModal] = useState({ open: false, data: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, data: null });

  const data = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        profileImage: faker.image.avatar(),
        username: faker.person.fullName(),
        email: faker.internet.email(),
        wallet: faker.number.float({ min: 100, max: 1000 }),
        matches_played: faker.number.int({ min: 0, max: 100 }),
        wins: faker.number.int({ min: 0, max: 100 }),
        totalWagered: faker.number.int({ min: 0, max: 100 }),
      })),
    []
  );

  const handleSuspend = (data: any) => {
    setSuspendModal({ open: true, data });
  };
  const handleDelete = (data: any) => {
    setDeleteModal({ open: true, data });
  };

  const onDelete = () => {
    setDeleteModal({ open: false, data: null });
  };

  const { playerManagementColumns } = useColumnDef({
    handleSuspend,
    handleDelete,
  });

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 min-h-0 p-4 flex flex-col">
        <DataTable data={data} columns={playerManagementColumns} />
      </div>
      {deleteModal && (
        <DeleteModal
          open={deleteModal}
          title="Delete User"
          onDelete={onDelete}
          icon={DELETE_KYC_IMAGE}
          setOpen={setDeleteModal}
          description="Are you sure you want to delete this user?"
        />
      )}
      {suspendModal && (
        <SuspendUserModal open={suspendModal} onClose={setSuspendModal} />
      )}
    </div>
  );
};

export default PlayerManagement;

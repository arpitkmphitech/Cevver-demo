import { cva } from "class-variance-authority";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { kycManagementTabs } from "@/lib/constants";
import useColumnDef from "@/hooks/useColumnDef";
import DataTable from "@/components/common/DataTable";
import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import UploadedDocumentsModal from "@/modal/UploadedDocumentsModal";
import DeleteModal from "@/modal/DeleteModal";
import { DELETE_KYC_IMAGE } from "@/lib/images";

const KycManagement = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [viewModal, setViewModal] = useState({ open: false, data: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, data: null });

  const data = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        profileImage: faker.image.avatar(),
        username: faker.person.fullName(),
        idDocumentFront: faker.image.url(),
        idDocumentBack: faker.image.url(),
      })),
    []
  );

  const handleView = (data: any) => {
    setViewModal({ open: true, data });
  };
  const handleDelete = (data: any) => {
    setDeleteModal({ open: true, data });
  };

  const onDelete = () => {
    setDeleteModal({ open: false, data: null });
  };

  const { kycManagementColumns } = useColumnDef(
    { handleView, handleDelete },
    activeTab
  );

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="bg-[#4690931A] px-4 py-4 shrink-0 sm:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-[#4690931A] h-14! rounded-[16px] w-full gap-[5px] sm:w-[483px]">
            {kycManagementTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cva(
                  "kyc-tab-trigger font-semibold text-base data-[state=active]:text-white data-[state=inactive]:text-primary"
                )()}
              >
                <span className="font-semibold text-base">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="flex-1 min-h-0 p-4 flex flex-col">
        <DataTable data={data} columns={kycManagementColumns} />
      </div>
      {viewModal && (
        <UploadedDocumentsModal open={viewModal} onClose={setViewModal} />
      )}
      {deleteModal && (
        <DeleteModal
          open={deleteModal}
          title="Delete KYC"
          onDelete={onDelete}
          icon={DELETE_KYC_IMAGE}
          setOpen={setDeleteModal}
          description="Are you sure you want to delete this experience?"
        />
      )}
    </div>
  );
};

export default KycManagement;

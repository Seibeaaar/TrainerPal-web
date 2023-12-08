import { useState } from "react";
import { useTranslation } from "react-i18next";
import { QuestionCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { PASSWORD_REQUIREMENTS_FIELDS } from "@/constants/auth";

const PasswordTip = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { t } = useTranslation();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="mt-[4px]">
      <QuestionCircleOutlined onClick={openModal} />
      <Modal
        open={modalVisible}
        onCancel={closeModal}
        destroyOnClose
        footer={() => (
          <button
            onClick={closeModal}
            className="bg-primary transition-all text-white hover:text-primary border border-primary hover:bg-white py-[8px] w-[64px] rounded-lg"
          >
            <p className="text-inherit">OK</p>
          </button>
        )}
      >
        <div className="flex items-center gap-[12px]">
          <InfoCircleOutlined />
          <p className="text-base font-medium">
            {t("signUp.fields.password.requirements.subtitle")}
          </p>
        </div>
        <ul className="list-disc ml-[16px] mt-[8px]">
          {PASSWORD_REQUIREMENTS_FIELDS.map((field) => (
            <li>{t(`signUp.fields.password.requirements.${field}`)};</li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default PasswordTip;

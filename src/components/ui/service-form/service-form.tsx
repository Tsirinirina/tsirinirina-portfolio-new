import { useContext, useEffect, useState } from "react";
import style from "./service-form.module.css";
import { WindowChoiceContext } from "@/context/window-choice.context";
import DataTable from "react-data-table-component";
import { ServicesConfiguration } from "@/services/window/window.model";
import PageLoader from "@/components/loader/page.loader";
import Switch from "@/components/switch/switch";
import { Button } from "@/components/buttons/button";
import Loader from "@/components/loader/loader";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/inputs/input";
import { SettingsContext } from "@/context/setting.context";

interface ServiceFormProps {}
const ServiceForm: React.FC<ServiceFormProps> = ({}) => {
  /**
   * Context
   */
  const { windowData } = useContext(WindowChoiceContext);
  const { settingsData } = useContext(SettingsContext);

  /**
   * Form State
   */
  const methods = useForm<any>();

  /**
   * Page State
   */
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSwitchChange = (isChecked: boolean, index: number) => {
    console.log("Switch is now:", isChecked ? "ON" : "OFF", index);
  };

  /**
   * Table State
   */
  const columns = [
    {
      name: "Actif",
      selector: (row: ServicesConfiguration) => row?.isChecked,
      sortable: false,
      width: "80px",
      cell: (row: ServicesConfiguration, index: any) => {
        return (
          <>
            <Switch
              name={`isChecked.${index}`}
              defaultChecked={row.isChecked}
              onChange={() => handleSwitchChange(row.isChecked, index)}
            />
          </>
        );
      },
    },
    {
      name: "Nom du service",
      selector: (row: ServicesConfiguration) => row?.service.name,
      sortable: false,
    },

    // {
    //   name: "Priorité",
    //   selector: (row: ServicesConfiguration) => row?.priority,
    //   sortable: false,
    //   width: "100px",
    //   cell: (row: ServicesConfiguration, index: any) => {
    //     return (
    //       <>
    //         <Input.Number
    //           name={`priority.${index}`}
    //           defaultValue={Number(row.priority)}
    //           max={Number(
    //             settingsData.find((item) => item.inputFieldName === "priority")
    //               ?.settingValue
    //           )}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  /**
   * Form State
   */
  const [submitBtnIsLoading, setSubmitBtnIsLoading] = useState<boolean>(false);
  /**
   * On submit validate
   * @param data
   */
  const onSubmit = async (data: any) => {
    setSubmitBtnIsLoading(true);
    console.log("DATA=", data);
    setSubmitBtnIsLoading(false);
  };

  useEffect(() => {
    if (windowData) {
      setIsLoading(false);
    }
  }, [windowData]);
  console.log(windowData.servicesConfiguration);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={style.form}>
        <DataTable
          columns={columns}
          data={[
            ...windowData.servicesConfiguration,
            ...windowData.servicesConfiguration,
          ]}
          fixedHeader
          noHeader
          noTableHead
          responsive
          fixedHeaderScrollHeight="280px"
        />
        <div className={style.btnContainer}>
          <Button.Submit
            styleType="primary"
            width="200px"
            disabled={submitBtnIsLoading}
          >
            {submitBtnIsLoading ? <Loader /> : "Valider"}
          </Button.Submit>
        </div>
      </form>
    </FormProvider>
  );
};

export default ServiceForm;

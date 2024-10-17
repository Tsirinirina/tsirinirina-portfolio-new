import { useForm } from "react-hook-form";
import CustomSelect from "../custom-select/custom-select";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { WindowChoiceContext } from "@/context/window-choice.context";
import { getAllWindow } from "@/services/window/window.service";
import { HttpStatusCode } from "axios";
import { useSession } from "next-auth/react";
const WindowChoice = () => {
  // Page State
  const router = useRouter();
  const { data, status } = useSession();

  // Window State
  const { windowData, setWindowSelectedId } = useContext(WindowChoiceContext);

  /**
   * Input Select State
   */
  const {
    control,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm<{ window: string }>();

  const window = watch("window", windowData && windowData._id.toString());

  const [options, setOptions] = useState<{ label: string; value: string }[]>();

  const loadData = async () => {
    const res = await getAllWindow();

    if (res.status === HttpStatusCode.Ok) {
      const windowsData = res.data.data;
      setOptions(
        windowsData
          .filter((item) => item.type.name !== "Bureau")
          .map((item) => {
            return {
              label: `${item.type.name.toString()} ${item.identifier.toString()}`,
              value: item._id.toString(),
            };
          })
      );
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      loadData();
    }
  }, [status]);

  // Effect to update selected window ID
  useEffect(() => {
    if (window) {
      setValue("window", window);
      setWindowSelectedId(window); // Set the selected window ID
    }
  }, [window, setWindowSelectedId]); // Ensure setWindowSelectedId is a dependency

  return (
    <>
      {options && (
        <CustomSelect
          name="window"
          options={options}
          control={control}
          placeholder="Guichet"
        />
      )}
    </>
  );
};

export default WindowChoice;

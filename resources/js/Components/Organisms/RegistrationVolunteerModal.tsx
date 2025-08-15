import { FormEventHandler, useEffect } from "react";
import { Input } from "../Atoms/Input";
import moment from "moment";
import Select from "../Atoms/Select";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "../InputError";
import SelectOptionsProps from "@/Models/SelectOptionsProps";
import Modal from "../Modal";

interface RegistrationVolunteerModalProps {
    isOpen: boolean;
    toggle: () => void;
    gameDate: Date | null;
    visitorTeamName: string;
    gameCategory: string;
    address: string;
    CPO: string;
    city: string;
    gameId: string;
    volunteerTypes: Array<SelectOptionsProps>;
}

export default function RegistrationVolunteerModal(
    props: RegistrationVolunteerModalProps
) {
    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        name: "",
        gameId: props.gameId,
        token: "",
        volunteerTypeId: "",
    });

    useEffect(() => {
        if (recentlySuccessful) {
            setTimeout(() => {
                handleClose();
            }, 1000);
        }
    }, [recentlySuccessful]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("volunteers.store"));
    };

    const handleClose = () => {
        props.toggle();
        reset("name", "token");
    };

    return (
        <Modal show={props.isOpen} onClose={handleClose}>
            <div className={"bg-white p-3 rounded-t-[16px] text-center"}>
                <h5 className={"m-0 p-2 text-text font-medium"}>
                    {props.gameCategory} contre {props.visitorTeamName}
                </h5>
                <p className={"m-0 text-sm text-gray-600"}>
                    {props.address}, <br />
                    {props.city} {props.CPO}
                </p>
                <p className={"text-sm text-gray-500"}>
                    {moment(props.gameDate).format("DD/MM/YYYY HH:mm")}
                </p>
            </div>
            <form
                className={
                    "m-4 h-full flex flex-col justify-between items-center"
                }
                onSubmit={submit}
            >
                <Select
                    innerText="Sélectionnez le poste"
                    value={data.volunteerTypeId}
                    onChange={(e) => setData("volunteerTypeId", e.target.value)}
                    selectOptions={props.volunteerTypes}
                />
                <InputError className="" message={errors.volunteerTypeId} />
                <Input
                    value={data.name}
                    type={"text"}
                    maxLength={30}
                    field={"nom"}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError className="" message={errors.name} />
                <Input
                    value={data.token}
                    type={"password"}
                    maxLength={30}
                    field={"mot de passe"}
                    onChange={(e) => setData("token", e.target.value)}
                />
                <InputError className="" message={errors.token} />

                <Transition
                    show={recentlySuccessful}
                    enter="leave"
                    enterFrom="leave-to"
                    leave="leave"
                    leaveTo="leave-to"
                >
                    <p className="">Inscription faite.</p>
                </Transition>
                <div className={"flex justify-around mt-3 w-full"}>
                    <div className={"flex justify-around w-full"}>
                        <button
                            className={
                                "px-4 py-2 rounded border border-solid bg-button-error text-white hover:bg-white hover:text-text"
                            }
                            type="button"
                            onClick={handleClose}
                        >
                            Annuler
                        </button>
                        <button
                            className={
                                "px-4 py-2 rounded bg-primary text-white"
                            }
                            onClick={submit}
                            type={"submit"}
                            disabled={processing}
                        >
                            S'enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

import React, {
    ChangeEvent,
    FormEventHandler,
    useEffect,
    useState,
} from "react";
import { Input } from "../Atoms/Input";
import moment from "moment";
import Select from "../Atoms/Select";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "../InputError";
import SelectOptionsProps from "@/Models/SelectOptionsProps";
import Modal from "../Modal";
import ResetPassword from "@/Pages/Auth/ResetPassword";

interface RegistrationVolunteerModalProps {
    isOpen: boolean;
    toggle: () => void;
    gameDate: Date | null;
    visitorTeamName: string;
    gameCategory: string;
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
            <div className={"modal-header"}>
                <h5 className={"heading"}>
                    {props.gameCategory} contre {props.visitorTeamName}
                </h5>
                <p>{moment(props.gameDate).format("DD/MM/YYYY HH:mm")}</p>
            </div>
            <form className={"form-submit"} onSubmit={submit}>
                <Select
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
                <div className={"modal-actions"}>
                    <div className={"actions-container"}>
                        <button
                            className={"cancel-btn"}
                            type="button"
                            onClick={handleClose}
                        >
                            Annuler
                        </button>
                        <button
                            className={"confirm-btn"}
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

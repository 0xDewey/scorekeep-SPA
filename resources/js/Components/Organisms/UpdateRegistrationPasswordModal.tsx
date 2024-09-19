import React, { FormEventHandler, useEffect } from "react";
import { Input } from "../Atoms/Input";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "../InputError";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import useModal from "@/Hooks/useModal";

interface UpdateRegistrationPasswordModalProps {
    password: string;
}

export default function UpdateRegistrationPasswordModal(
    props: UpdateRegistrationPasswordModalProps
) {
    const { isOpen, toggle } = useModal();

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            password: props.password,
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

        post(route("dashboard.local_teams.password.update"));
    };

    const handleClose = () => {
        toggle();
    };

    return (
        <>
            <div className="dashboard-link" onClick={toggle}>
                <div className="flex flex-col text-center">
                    <p className="text-2xl m-0">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </p>
                    <p>Modifier le mot de passe</p>
                </div>
            </div>
            <Modal show={isOpen} onClose={handleClose}>
                <div className={"modal-header"}>
                    <h5 className={"heading"}>
                        Mettre à jour le mot de passe d'enregistrement
                    </h5>
                </div>
                <form className={"form-submit"} onSubmit={submit}>
                    <Input
                        value={data.password}
                        type={"text"}
                        maxLength={30}
                        field={"Mot de passe"}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError className="" message={errors.password} />

                    <Transition
                        show={recentlySuccessful}
                        enter="leave"
                        enterFrom="leave-to"
                        leave="leave"
                        leaveTo="leave-to"
                    >
                        <p className="">Modification effectuée.</p>
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
                                Modifier
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}

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
            <div className="inline-block" onClick={toggle}>
                <div className="flex flex-col text-center items-center">
                    <p className="text-2xl m-0">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </p>
                    <p className="text-sm">Modifier le mot de passe</p>
                </div>
            </div>
            <Modal show={isOpen} onClose={handleClose}>
                <div className={"bg-white p-4 rounded-t-lg text-center"}>
                    <h5 className={"m-0 p-2 text-text font-medium text-lg"}>
                        Mettre \u00e0 jour le mot de passe d'enregistrement
                    </h5>
                </div>
                <form
                    className={
                        "m-4 h-full flex flex-col justify-between items-center space-y-4"
                    }
                    onSubmit={submit}
                >
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
                        <p className="text-sm text-green-600">
                            Modification effectu\u00e9e.
                        </p>
                    </Transition>
                    <div className={"flex justify-end mt-3 w-full space-x-3"}>
                        <button
                            className={
                                "px-4 py-2 rounded border border-solid bg-red-600 text-white hover:bg-red-700"
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
                            Modifier
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

import { useRef, useState, FormEventHandler, ChangeEvent } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Button } from "@/Components/Atoms/Button";
import { Input } from "@/Components/Atoms/Input";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "123",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`${className}`}>
            <header>
                <h2 className="">Supprimer le compte</h2>

                <p className="">
                    Une fois votre compte supprimé, toutes ses ressources et
                    données seront définitivement effacées. Avant de supprimer
                    votre compte, veuillez télécharger toutes les données ou
                    informations que vous souhaitez conserver.
                </p>
            </header>

            <div className="buttons">
                <Button
                    type="button"
                    onClick={confirmUserDeletion}
                    className="danger"
                >
                    Supprimer le compte
                </Button>
            </div>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="delete-form">
                    <h2 className="">
                        Êtes-vous sûr de vouloir supprimer votre compte ?
                    </h2>

                    <p className="">
                        Une fois votre compte supprimé, toutes ses ressources et
                        données seront données seront définitivement supprimées.
                        Veuillez saisir votre mot de passe pour confirmer que
                        vous souhaitez supprimer définitivement votre compte.
                    </p>

                    <div className="">
                        <Input
                            field="Mot de passe"
                            type={"password"}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError message={errors.password} className="" />
                    </div>

                    <div className="buttons">
                        <Button className="" onClick={closeModal} type="button">
                            Annuler
                        </Button>

                        <Button
                            onClick={deleteUser}
                            className="danger"
                            type="button"
                            disabled={processing}
                        >
                            Supprimer
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}

import { useRef, useState, FormEventHandler, ChangeEvent } from "react";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
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
        password: "",
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

            <div className="flex justify-around space-x-4 mt-4">
                <Button
                    type="button"
                    onClick={confirmUserDeletion}
                    className="danger"
                >
                    Supprimer le compte
                </Button>
            </div>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <div className={"bg-white p-3 rounded-t-[16px] text-center"}>
                    <h5 className={"m-0 p-2 text-text font-medium"}>
                        Êtes-vous sûr de vouloir supprimer votre compte ?
                    </h5>
                </div>
                <form
                    onSubmit={deleteUser}
                    className="m-4 h-full flex flex-col justify-between items-center"
                >
                    <p className="mx-6">
                        Une fois votre compte supprimé, toutes ses ressources et
                        données seront données seront définitivement supprimées.
                        Veuillez saisir votre mot de passe pour confirmer que
                        vous souhaitez supprimer définitivement votre compte.
                    </p>
                    <Input
                        field="Mot de passe"
                        type={"password"}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="" />

                    <div className="flex justify-around space-x-4 mt-4">
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

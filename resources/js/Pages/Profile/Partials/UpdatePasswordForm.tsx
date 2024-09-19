import { useRef, FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Input } from "@/Components/Atoms/Input";
import { Button } from "@/Components/Atoms/Button";

export default function UpdatePasswordForm({
    className = "",
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="">Mise à jour de mot de passe</h2>

                <p className="">
                    Veillez à ce que votre compte utilise un mot de passe long
                    et aléatoire pour rester sécurisé.
                </p>
            </header>

            <form onSubmit={updatePassword} className="">
                <div className="max-w-sm">
                    <Input
                        field="mot de passe actuel"
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                    />

                    <InputError
                        message={errors.current_password}
                        className=""
                    />
                </div>

                <div className="max-w-sm">
                    <Input
                        field="nouveau mot de passe"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                    />

                    <InputError message={errors.password} className="" />
                </div>

                <div className="max-w-sm">
                    <Input
                        field="confirmer le mot de passe"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className=""
                    />
                </div>

                <div className="buttons">
                    <Button
                        type="submit"
                        className="valid"
                        disabled={processing}
                    >
                        Valider
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="leave"
                        enterFrom="leave-to"
                        leave="leave"
                        leaveTo="leave-to"
                    >
                        <p className="text-sm text-gray-600">Mis à jour.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

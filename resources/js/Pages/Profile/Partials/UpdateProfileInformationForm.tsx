import InputError from "@/Components/InputError";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import { Input } from "@/Components/Atoms/Input";
import { Button } from "@/Components/Atoms/Button";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="">Information de profil</h2>

                <p className="">
                    Mettez à jour les informations de profil et l'adresse
                    électronique de votre compte.
                </p>
            </header>

            <form onSubmit={submit} className="">
                <div className="max-w-sm m-auto">
                    <Input
                        field="nom"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError className="" message={errors.name} />
                </div>

                <div className="max-w-sm m-auto">
                    <Input
                        field="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError className="" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="">
                            Votre adresse électronique n'est pas vérifiée.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                            >
                                Cliquez ici pour renvoyer l'e-mail de
                                vérification.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div>
                                Un nouveau lien de vérification a été envoyé à
                                votre adresse électronique.
                            </div>
                        )}
                    </div>
                )}

                <div className="buttons">
                    <Button
                        className="valid"
                        type="submit"
                        disabled={processing}
                    >
                        Mettre à jour
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="leave"
                        enterFrom="leave-to"
                        leave="leave"
                        leaveTo="leave-to"
                    >
                        <p className="">Mis à jour.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

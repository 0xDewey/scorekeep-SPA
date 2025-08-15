import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Button } from "@/Components/Atoms/Button";
import { Input } from "@/Components/Atoms/Input";
import { Transition } from "@headlessui/react";

export default function ForgotPassword({ auth }: PageProps<{}>) {
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            email: "",
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Layout user={auth.user}>
            <Head title="Mot de passe oublié" />

            <div
                className={
                    "mt-24 w-full max-w-md mx-auto py-5 bg-card rounded-2xl shadow-custom"
                }
            >
                <form onSubmit={submit}>
                    <h3>Réinitialisation du mot de passe</h3>

                    <Transition
                        show={recentlySuccessful}
                        enter="leave"
                        enterFrom="leave-to"
                        leave="leave"
                        leaveTo="leave-to"
                    >
                        <p className="">
                            Un lien vous a été envoyé par e-mail.
                        </p>
                    </Transition>
                    <Input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        field={"email"}
                    />
                    <InputError message={errors.email} className="mt-2" />
                    <Button
                        className="valid"
                        type="submit"
                        disabled={processing}
                    >
                        Réinitialiser le mot de passe
                    </Button>
                </form>
            </div>
        </Layout>
    );
}

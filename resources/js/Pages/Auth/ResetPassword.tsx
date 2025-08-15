import { useEffect, FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { Input } from "@/Components/Atoms/Input";
import { Button } from "@/Components/Atoms/Button";

export default function ResetPassword({
    token,
    email,
    auth,
}: PageProps<{ token: string; email: string }>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <Layout user={auth.user}>
            <Head title="Réinitialiser son mot de passe" />

            <div
                className={
                    "mt-24 w-min-[min(80vw,500px)] w-full max-w-md mx-auto py-5 bg-card rounded-2xl shadow-custom"
                }
            >
                <form onSubmit={submit}>
                    <Input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        field={"email"}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <Input
                        type="password"
                        field="mot de passe"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />

                    <Input
                        type="password"
                        field="confirmation de mot de passe"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />

                    <div className="flex justify-end w-full">
                        <Button
                            className="valid"
                            type="submit"
                            disabled={processing}
                        >
                            Réinitialiser
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

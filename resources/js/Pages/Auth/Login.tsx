import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import { Head, Link, router, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Input } from "@/Components/Atoms/Input";
import { Button } from "@/Components/Atoms/Button";

export default function Login({
    canResetPassword,
    auth,
}: PageProps<{
    canResetPassword: boolean;
}>) {
    const dashboardURI = "/dashboard";

    useEffect(() => {
        if (auth.user) {
            router.get(dashboardURI);
        }
    }, [auth.user]);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Layout user={auth.user}>
            <Head title="Se connecter" />

            <div className={"connexion-form"}>
                <form action="" onSubmit={submit}>
                    <h3>Se connecter</h3>
                    <Input
                        field={"email"}
                        value={data.email}
                        type={"email"}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                    <Input
                        field={"mot de passe"}
                        value={data.password}
                        type={"password"}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                    <label className="">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="">Se souvenir de moi</span>
                    </label>
                    <div className={"buttons"}>
                        {canResetPassword && (
                            <Link href={route("password.request")} className="">
                                Mot de passe oublié
                            </Link>
                        )}
                        <Button
                            className="valid"
                            type={"submit"}
                            disabled={processing}
                        >
                            Valider
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

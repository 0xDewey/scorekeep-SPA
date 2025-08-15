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

            <div className="max-w-md mx-auto mt-8 p-6 bg-card rounded-2xl shadow-custom">
                <form onSubmit={submit} className="space-y-6">
                    <h3 className="text-xl font-bold text-text text-center mb-6">
                        Se connecter
                    </h3>
                    <Input
                        field={"email"}
                        value={data.email}
                        type={"email"}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                    />
                    <Input
                        field={"mot de passe"}
                        value={data.password}
                        type={"password"}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                    />
                    <label className="flex items-center space-x-2">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="text-text">Se souvenir de moi</span>
                    </label>
                    <div className="flex justify-between items-center space-x-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-primary hover:underline text-sm"
                            >
                                Mot de passe oublié
                            </Link>
                        )}
                        <Button
                            variant="valid"
                            type="submit"
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

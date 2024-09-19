import Layout from "@/Layouts/Layout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <Layout user={auth.user}>
            <Head title="Profil" />

            <section className="profile lg:w-6/12 w-10/12">
                <div className="">
                    <div className="">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className=""
                        />
                    </div>

                    <div className="">
                        <UpdatePasswordForm className="" />
                    </div>

                    <div className="">
                        <DeleteUserForm className="" />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

import React, { useState } from "react";
import { Button } from "@/Components/Atoms/Button";
import { router, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export default function ICSUploadButton() {
    const [label, setLabel] = useState<string>("Ajouter via un fichier");

    const [btnClassName, setBtnClassName] = useState<string>("hidden");

    const { data, setData, post, processing } = useForm({
        calendar: undefined,
    });
    const handleUploadICS = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        post(route("dashboard.matchs.uploadIcs"));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files;

        if (files !== undefined && files !== null) {
            // @ts-ignore
            setData("calendar", files[0]);
            setLabel(files[0].name);
            setBtnClassName("upload-button");
        }
    };
    return (
        <form
            onSubmit={handleUploadICS}
            className="flex space-x-4 items-center"
        >
            <input
                type="file"
                id="ics-file-input"
                accept=".ics"
                onChange={handleFile}
                className="sr-only"
            />

            <label
                htmlFor="ics-file-input"
                className="inline-flex items-center cursor-pointer text-sm text-gray-700 hover:text-gray-900"
            >
                <FontAwesomeIcon icon={faUpload} className="me-2" /> {label}
            </label>

            <Button
                type="submit"
                className={`${btnClassName} ml-2`}
                disabled={processing}
            >
                Télécharger
            </Button>
        </form>
    );
}

import React from "react";
import {Input, Button} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

export default function Login() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="h-[87.4vh] flex flex-col items-center justify-center mt-6 pb-56">
            <div className="m-6 text-3xl font-semibold">Login</div>
            <Input id="nombre" type="text" variant="bordered" label="Nombre" placeholder="Escribe tu nombre" className="max-w-xs"/>
            <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs mt-6"
            />
            <Button color="primary" variant="shadow" className="mt-6 w-64">
                Iniciar Sesión
            </Button>
        </div>
    );
}
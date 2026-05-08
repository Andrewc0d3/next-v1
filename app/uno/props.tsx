import { ReactNode } from 'react';

type PropsProps = {
    nombre?: ReactNode;
};

export default function Props({ nombre }: PropsProps) {
    return (
        <div>
            {nombre}
        </div>
    );
}